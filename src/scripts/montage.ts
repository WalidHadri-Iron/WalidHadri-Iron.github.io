// Film Montage behaviour. The page is complete without this script; it only adds motion.
const still = new URLSearchParams(location.search).has("still");
if (still) document.documentElement.classList.add("still");
const reduce = still || matchMedia("(prefers-reduced-motion: reduce)").matches;

// Only the section in view carries full spot ink; the rest of the stack sits in grey.
const focus = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.target.setAttribute("data-focus", e.isIntersecting ? "on" : "off")),
  { rootMargin: "-40% 0px -40% 0px" },
);
if (!still) document.querySelectorAll("[data-section]").forEach((s) => focus.observe(s));

// Images below the fold start as a coarse halftone and develop once, as they arrive.
if (!reduce) {
  const develop = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.remove("is-latent");
        develop.unobserve(e.target);
      }),
    { rootMargin: "0px 0px -18% 0px" },
  );
  document.querySelectorAll<HTMLElement>(".develop:not(.develop-in)").forEach((el) => {
    if (el.getBoundingClientRect().top > innerHeight * 0.85) {
      el.classList.add("is-latent");
      develop.observe(el);
    }
  });
}

// Parallax: each film moves at its own depth, measured from its resting position.
if (!reduce) {
  const layers = [...document.querySelectorAll<HTMLElement>("[data-depth]")].map((el) => ({
    el,
    depth: parseFloat(el.dataset.depth || "0"),
    center: 0,
    atTop: false,
  }));
  const narrow = matchMedia("(max-width: 760px)");
  const measure = () => {
    for (const l of layers) {
      l.el.style.translate = "";
      const r = l.el.getBoundingClientRect();
      l.center = r.top + scrollY + r.height / 2;
      l.atTop = r.top + scrollY < innerHeight;
    }
  };
  let queued = false;
  const paint = () => {
    queued = false;
    const mid = scrollY + innerHeight / 2;
    const k = narrow.matches ? 0.45 : 1;
    for (const l of layers) {
      if (Math.abs(l.center - mid) > innerHeight * 1.6) continue;
      // Layers in the first screen rest at zero and drift as you scroll; the rest pass through zero at mid-screen.
      const offset = (l.atTop ? -scrollY : l.center - mid) * l.depth * k;
      l.el.style.translate = `0 ${offset.toFixed(1)}px`;
    }
  };
  const queue = () => {
    if (!queued) { queued = true; requestAnimationFrame(paint); }
  };
  measure();
  paint();
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", () => { measure(); queue(); });
  document.fonts?.ready.then(() => { measure(); queue(); });
}

// Screen recordings loop only while visible, and always obey the pause button.
document.querySelectorAll<HTMLElement>("[data-clip]").forEach((fig) => {
  const video = fig.querySelector("video")!;
  const button = fig.querySelector<HTMLButtonElement>(".clip-toggle")!;
  const label = button.querySelector(".lbl")!;
  let held = reduce;
  const show = () => {
    const paused = video.paused;
    button.setAttribute("aria-pressed", String(paused));
    label.textContent = paused ? "Play" : "Pause";
  };
  new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting && !held) video.play().catch(() => {});
      else video.pause();
    },
    { threshold: 0.2 },
  ).observe(video);
  button.addEventListener("click", () => {
    held = !video.paused;
    if (held) video.pause();
    else video.play().catch(() => {});
  });
  video.addEventListener("play", show);
  video.addEventListener("pause", show);
  show();
});
