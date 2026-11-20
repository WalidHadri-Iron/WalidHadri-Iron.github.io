// Build-time data: latest videos, articles and star counts.
// Every source falls back to src/data/snapshot.json, so a failed fetch never breaks the build.
import { XMLParser } from "fast-xml-parser";
import snapshot from "../data/snapshot.json";

const CHANNEL_ID = "UCMQG-5MKCZruceIp-xfCAAw";
const MEDIUM_FEED = "https://medium.com/feed/@walidhadri";
const GITHUB_USER = "WalidHadri-Iron";
const UA = { "User-Agent": "walidhadri-portfolio-build/1.0" };

export type Video = { id: string; title: string; published: string };
export type Post = { title: string; url: string; published: string };

const parser = new XMLParser({ ignoreAttributes: false });
const asArray = <T>(v: T | T[] | undefined): T[] => (v === undefined ? [] : Array.isArray(v) ? v : [v]);

// The feed links a Short to /shorts/<id> and a regular video to /watch?v=<id>.
const isShort = (entry: any) => asArray<any>(entry.link).some((l) => String(l?.["@_href"] ?? "").includes("/shorts/"));

export async function getVideos(count = 3): Promise<Video[]> {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`, { headers: UA });
    if (!res.ok) throw new Error(`YouTube feed ${res.status}`);
    const feed = parser.parse(await res.text()).feed;
    const videos: Video[] = [];
    for (const e of asArray<any>(feed.entry)) {
      const id = e["yt:videoId"];
      if (!id || isShort(e)) continue;
      videos.push({ id, title: String(e.title).trim(), published: String(e.published).slice(0, 10) });
      if (videos.length === count) break;
    }
    if (videos.length) return videos;
    throw new Error("no videos");
  } catch (err) {
    console.warn(`[feeds] videos from snapshot: ${err}`);
    return snapshot.videos.slice(0, count);
  }
}

export async function getPosts(count = 6): Promise<Post[]> {
  try {
    const res = await fetch(MEDIUM_FEED, { headers: UA });
    if (!res.ok) throw new Error(`Medium feed ${res.status}`);
    const items = asArray<any>(parser.parse(await res.text()).rss.channel.item);
    const posts = items.map((i) => ({
      title: String(i.title).trim(),
      url: String(i.link).split("?")[0],
      published: new Date(i.pubDate).toISOString().slice(0, 10),
    }));
    if (posts.length) return posts.slice(0, count);
    throw new Error("no posts");
  } catch (err) {
    console.warn(`[feeds] posts from snapshot: ${err}`);
    return snapshot.posts.slice(0, count);
  }
}

export async function getStars(): Promise<Record<string, number>> {
  try {
    const headers: Record<string, string> = { ...UA, Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`, { headers });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const repos = (await res.json()) as { name: string; stargazers_count: number }[];
    return Object.fromEntries(repos.map((r) => [r.name, r.stargazers_count]));
  } catch (err) {
    console.warn(`[feeds] stars from snapshot: ${err}`);
    return snapshot.stars;
  }
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function shortDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${String(d).padStart(2, "0")} ${MONTHS[m - 1]} ${y}`;
}
