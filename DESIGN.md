---
name: Walid Hadri
description: Film Montage. Printed film positives on a light table, two spot inks, registered to one twelve-column grid.
colors:
  teal: "#0f9d8f"
  teal-ink: "#08695f"
  yellow: "#f2c230"
  base: "#e4e7e1"
  paper: "#f7f7f5"
  ink: "#121417"
  ink-2: "#474c54"
  line: "#c3c7c0"
  film-grey: "#9ba1a7"
typography:
  display:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "17rem"
    fontWeight: 880
    lineHeight: 0.8
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "8rem"
    fontWeight: 860
    lineHeight: 0.84
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 68"
  title:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 820
    lineHeight: 1
    fontVariation: "'wdth' 75"
  body-lede:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 460
    lineHeight: 1.4
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 420
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 680
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 82"
  label-action:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 720
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 82"
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 420
    fontFeature: "'tnum' 1, 'zero' 1"
rounded:
  none: "0px"
spacing:
  columns: 12
  sheet-max: "1440px"
  gutter-min: "16px"
  gutter-max: "56px"
  gap-min: "12px"
  gap-max: "24px"
  section-min: "96px"
  section-max: "200px"
  slip-pad-min: "18px"
  slip-pad-max: "32px"
  2xs: "6px"
  xs: "10px"
  sm: "14px"
  md: "18px"
  lg: "22px"
components:
  action:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "0.7em 1em"
  action-on-slip:
    backgroundColor: "{colors.base}"
    textColor: "{colors.ink}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "0.7em 1em"
  action-yellow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "0.7em 1em"
  slip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "32px"
  film-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0.08em 0.14em"
  film-teal:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0.08em 0.14em"
  token:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "4px 7px"
  token-next:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.yellow}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "4px 7px"
  clip-toggle:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 10px"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  nav-home:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: Walid Hadri

## Overview

**Creative North Star: "The Light Table"**

The site is a stack of printed film positives laid on a pale light table and registered to one grid, in the manner of 1970s Basel layered-film typography. Each piece of content is a separate sheet: a black ink film, a translucent teal film, a yellow or grey halftone screen, or a clean paper slip. Sheets overlap, sit a degree or so off square, and slide apart at different depths as the page scrolls. Crop marks frame the slips and a printer's registration target pins each section title, so the montage always reads as made on purpose rather than scattered.

The palette is two spot inks over neutral film. Teal is Walid's ink: his surname, half the section titles, every link underline and the focus ring (deep teal on light surfaces, full teal on ink). Tram yellow is the second ink, kept for what Dowse finds and for the next thing to do: the LinkedIn tab, primary actions, the predicted token, the winning number, the top search hit. Black halftone ink carries the rest. Only the section in the middle of the viewport prints in full colour; the rest of the stack drops to grey, so colour follows attention down the page.

Type is one variable grotesk, Archivo, whose width axis carries the whole hierarchy: compressed to 62% for the name, widening step by step to 100% for reading. JetBrains Mono appears only for tokens, dates, file names and measurements. The density is low and editorial: big plates of type, short slips of copy, generous section gaps. This world replaces the earlier dark, neon-green monospace "terminal" portfolio and is light only.

**Key Characteristics:**
- A light-table film base, never white and never dark.
- Two spot inks (teal, yellow) plus black; colour lives on films, screens and edges, reading text lives on paper.
- One family, many widths: Archivo from 62% to 100% stretch, uppercase for everything that is not a sentence.
- Films and slips are hand-laid: tilted 0.3° to 1.6° and overlapping their neighbours.
- Depth from overprint (multiply), overlap and parallax, not from shadows.
- Square corners everywhere; crop marks and registration targets as the only ornament.
- One authored entrance (films pulling into register) and one recurring effect (images developing out of a halftone screen).

## Colors

Neutral, slightly green film greys under two saturated spot inks, used like a two-colour print job.

### Primary
- **Walid Teal** (#0f9d8f): spot ink one. Fills translucent teal films (the surname HADRI, alternating section titles, the second OCR era, the second Dowse pipeline step), the teal cells of the vector plate, link underlines, the input caret, the focus ring inside ink films and screen recordings (5.5:1 on Halftone Black) and the misregistered hover pass under actions. Films print it at 86% with multiply blending, so over the film base it reads about #2b9b8c and darkens to near black where it crosses an ink film. It never carries text below display size; type on a teal film is ink (5.4:1).
- **Deep Teal Ink** (#08695f): the form of teal for text and focus. Run-in caption labels ("Dowse", "Any language", "Inside documents"), the star icon in project meta lines, and the 2px focus outline wherever it sits on paper or the film base. Reads 6.1:1 on paper and 5.3:1 on the film base.

### Secondary
- **Tram Yellow** (#f2c230): spot ink two, for what is found and what to do next. The fixed LinkedIn tab, `action--yellow` primary actions, the dashed predicted token and its caret, the improved Kaggle rank, "on LinkedIn" on the closing film, the closing word on hover, the top search hit, the benchmark's total row, the yellow halftone screens and text selection. As text it appears only on ink films (11:1); on paper or base it is a fill, never a text colour.

### Neutral
- **Light-Table Film Base** (#e4e7e1): the page background and browser theme colour, the table every sheet lies on. Also the fill of secondary actions when they sit on a paper slip, so the button reads as a separate piece.
- **Clean Slip Paper** (#f7f7f5): achromatic paper for every slip that carries reading text, the fill of default actions on the base, token chips, the clip pause button, and the text colour on ink films.
- **Halftone Black** (#121417): body text, ink films, crop marks, registration targets, the 1.5px rule that heads lists and tables, the scrollbar thumb. 17.2:1 on paper, 14.8:1 on base.
- **Press Grey** (#474c54): secondary text on paper: dates, spec terms, table headers, org names in the ledger, notes, inactive nav links. 8.1:1 on paper, 6.9:1 on base.
- **Hairline Grey-Green** (#c3c7c0): 1px row dividers inside slips (spec list, ledger, writing list, benchmark table). Never a text colour.
- **Film Grey** (#9ba1a7): secondary text on ink films only (Kaggle board terms and heading), 7.1:1 on ink.

### Named Rules
**The Two Inks Rule.** Teal and yellow are the only chromatic colours. Teal means Walid; yellow means the result or the next step. Do not add a third hue, and do not swap their meanings.

**The Spot In Focus Rule.** Only the section whose middle crosses the centre band of the viewport prints in full spot ink. Every film, screen, clip and image marked as spot ink elsewhere drops to `grayscale(1) contrast(0.92)` over 0.7s. Paper slips, text and actions stay in colour, and the fixed LinkedIn tab sits outside the stack and never greys.

**The Two-Surface Focus Rule.** The focus ring takes the teal that holds contrast against what lies under it: Deep Teal Ink on paper and the film base, Walid Teal inside ink films and screen recordings.

**The Paper Carries Prose Rule.** Paragraphs sit on paper slips. Films carry display words, numerals, mono strings and at most a one- or two-sentence caption. Body text never sits directly on a halftone screen.

## Typography

**Display Font:** Archivo variable (wdth 62–125%, wght 100–900), self-hosted, with Helvetica Neue and Arial as fallback
**Body Font:** Archivo, the same file at 100% width
**Label/Mono Font:** JetBrains Mono, self-hosted, with ui-monospace, Menlo and Consolas as fallback

**Character:** A single grotesk pressed from compressed poster capitals down to a plain, even reading width, the way a Swiss type shop would set a whole job from one family. The mono is a technical annotation layer and never sets a sentence.

Width is set with `font-stretch`; the frontmatter's `'wdth'` value names the same axis. Both faces are OFL, self-hosted and loaded with `font-display: swap`; Archivo is preloaded.

### Hierarchy
- **Display** (stretch 62%, weight 880, line-height 0.8, -0.02em, uppercase, word-spacing 0.1em): the name WALID / HADRI (fluid `clamp(5.25rem, 19vw, 17rem)`, 24vw on narrow screens), the Dowse case word (`clamp(5.5rem, 22vw, 19rem)`), SAY HELLO (`clamp(4.5rem, 15vw, 14rem)`), 404 (`clamp(6rem, 26vw, 20rem)`) and the OCR era words (`clamp(2.5rem, 6vw, 5.5rem)`). Always on a film.
- **Headline** (stretch 68%, weight 860, `clamp(3.25rem, 8.4vw, 8rem)`, line-height 0.84, -0.015em, uppercase): section titles, each set on its own ink or teal film.
- **Title** (stretch 75%, weight 820, `clamp(1.75rem, 2.6vw, 2.5rem)`, line-height 1, uppercase): the heading at the top of a project slip; the Dowse pipeline steps use the same role one size down (`clamp(1.5rem, 2.2vw, 2rem)`).
- **Lede** (stretch 100%, weight 460, `clamp(1.125rem, 1.5vw, 1.375rem)`, line-height 1.4, max 34ch): the first sentence of a major slip. The hero role line uses a sibling size (`clamp(1.0625rem, 1.35vw, 1.25rem)`, line-height 1.45, max 40ch) with its title line at weight 720.
- **Body** (stretch 100%, weight 420, 1.0625rem / 17px, line-height 1.55): all reading text, 52–60ch on slips. Emphasis steps up in weight, not size: 600–720 for names, roles, link lists and video titles. Notes drop to 0.875rem or 0.8125rem in Press Grey.
- **Label** (stretch 82%, weight 680, 0.8125rem, 0.07em, uppercase): nav links, run-in caption labels, list headings ("Elsewhere", "Education"), definition terms and table headers.
- **Action label** (stretch 82%, weight 720, 0.9375rem, 0.05em, uppercase): every action. The clip pause button uses a smaller cut (weight 700, 0.75rem, 0.07em).
- **Mono** (JetBrains Mono, tabular and slashed-zero figures, 0.8125–0.875rem): dates, measurements, spec values, file names, step numbers, the token strip (weight 500, `clamp(0.875rem, 1.15vw, 1.0625rem)`) and the large Kaggle numerals (weight 600, `clamp(1.75rem, 3vw, 2.75rem)`).

Headings use `text-wrap: balance`; paragraphs, list items and captions use `text-wrap: pretty`.

### Named Rules
**The Width Ladder Rule.** Hierarchy is carried by width before size: 62% display, 68% headline, 75% title, 82% label and action, 100% reading. A new role takes a rung on this ladder; it does not introduce a second family.

**The Mono Measures Rule.** Mono is for things a machine would print: tokens, dates, numbers with units, file names. Never for headings, sentences or buttons.

**The Capitals Rule.** Uppercase belongs to display, headline, title, label and action roles. Sentences, captions and link text stay in sentence case.

## Layout

Every section is a **sheet**: a 12-column grid (`repeat(12, minmax(0, 1fr))`) capped at 1440px and centred, with a fluid gutter `max(16px, min(4vw, 56px))` (respecting the safe-area insets) and a column gap `clamp(12px, 1.6vw, 24px)`. Rows default to zero gap: elements are placed by column span and explicit row, then pushed into overlap with negative margins.

Sections are separated by `clamp(96px, 14vw, 200px)`. The list of work pieces uses its own row gap `clamp(72px, 10vw, 150px)`. Inside slips the rhythm is a small print-shop set: 6, 10, 14, 18 and 22px. A section title film is followed by its slip 14px below; actions sit 18–22px below the copy; slip padding is `clamp(18px, 2.2vw, 32px)`.

Composition follows a film-and-slip grammar. A section opens with a title film spanning 5 to 10 columns, usually left-aligned and sometimes justified to the right edge. Each piece of work is one film (a clip, an image, a board, a stack of era plates) paired with one paper slip that overlaps it by 10 to 48px and spans a different set of columns, so no two pieces share a silhouette. Halftone screens sit behind on the deepest layer, spanning 3 to 8 columns. Media is allowed to cross a section seam, reaching into the section above or below with a negative margin; where two sections meet this way, the earlier one stacks above the later (the hero sits over Dowse). Videos are laid as a three-frame reel at staggered heights.

Films and slips are hand-laid: tilted between 0.3° and 1.6° either way, with neighbours alternating sign. A long reading slip may sit square (the Dowse spec slip, the closing links slip, the 404 slip); halftone screens and the grid itself always stay square.

Navigation: section links sit top left in the label style, absolutely positioned (they scroll away). The LinkedIn tab is fixed top right. `scroll-padding-top` is 88px so anchored sections clear the tab.

### Responsive
- **At 860px and below** every film, slip and clip spans the full 12 columns in source order; rotations stay. The display name sets at 24vw with HADRI pushed to the right edge. Halftone screens are hidden. Slips overlap their media with a -12 to -20px top margin and a 10–12px side inset; boards and image films move above their slip. The nav wraps: the name takes its own line (with right padding to clear the tab), section links go below. The writing list and ledger collapse their date column; the Dowse pipeline drops to two columns. The hero gains extra top padding to clear the two-line nav.
- **At 760px and below** parallax travel is scaled to 0.45 of desktop.
- **At 560px and below** crop marks are hidden, the Dowse pipeline becomes one column, the case-study brief stacks term over definition, and the benchmark table becomes stacked rows that each name their column.
- **On touch (`hover: none`)** the clip pause button is always visible.
- The page never scrolls sideways: `overflow-x: clip` on html and body; wide tables scroll inside their own wrapper.

### Named Rules
**The One Register Rule.** Everything snaps to the 12-column sheet. Overlap and rotation are applied after placement; nothing is positioned absolutely against the viewport except the LinkedIn tab and the skip link.

**The Unequal Pieces Rule.** Work is never a row of same-size cards. Each piece pairs one film with one slip at its own spans and offsets.

## Elevation & Depth

The system is flat in the sense that matters: films and slips cast no shadows. Depth comes from four physical cues, in this order: stacking order, multiply overprint (translucent teal films and halftone screens darken what lies under them, as film does on a light table), overlap through negative margins, and parallax travel on scroll.

Stacking order, back to front: halftone screens (z 0), films (1–2), slips (2–3), clips that sit on top of a composition (3–4), registration targets (5), the top nav (20), the LinkedIn tab (30), the skip link (50).

### Shadow Vocabulary
- **Fixed-tab lift** (`box-shadow: 0 6px 18px -8px rgb(18 20 23 / 0.35)`): the LinkedIn tab only, to separate fixed chrome from the stack scrolling under it.
- **Top-film lift** (`box-shadow: 0 30px 60px -30px rgb(18 20 23 / 0.55)`): the first screen's Dowse clip only, the top sheet of the opening montage.

### Parallax
Each layer carries a depth factor. On scroll its vertical offset is `(distance from the viewport's mid line) × depth`, written to the CSS `translate` property so it composes with the element's `rotate` and with the entrance animation's `transform` without overriding either.
- **Positive depth is near** (moves faster than the page), **negative is far** (lags). Halftone screens are deepest (-0.08 to -0.14), clips nearest (+0.06 to +0.08), films and slips in between (±0.02 to ±0.06).
- **First-screen layers rest at zero.** Anything whose top is within the first viewport is measured from scroll position 0, so on load the hero is exactly where the grid put it and only drifts once scrolling starts. Every other layer passes through zero offset when its centre crosses mid-screen.
- **Pairs that must read together share a depth.** A section title film and the slip it introduces always take the same factor, so they never shear apart. A piece's media and its slip take opposite signs, so they visibly separate.
- Layers more than 1.6 viewport heights from mid-screen are not updated; updates are batched to one animation frame; positions are re-measured on resize and once fonts load.

### Named Rules
**The No Drop Shadow Rule.** Films and slips sit flat on the table. The two lifts above are the whole shadow vocabulary; a new surface earns depth by overprint, overlap or parallax.

**The Shared Depth Rule.** If two layers must stay aligned (a title and its slip), give them one depth factor. If they should slide apart, give them opposite signs.

## Shapes

Every surface is a square-cornered rectangle (0px radius). The single exception is the 2px radius on the focus outline. Rectangles are tilted, never skewed or clipped into other shapes. Films hug their type, with padding of 0.06–0.14em around display words, so a title reads as a strip of film cut to fit.

Recurring geometry:
- **Crop marks:** 14px L-shaped ticks drawn as 1px Halftone Black hairlines, set 20px outside each corner of a paper slip (and of the hero and case-study sheet), with a 1px gap from the corner lines. Decorative and hidden from assistive tech.
- **Registration target:** a 22px circle (radius 6.5 of 24, stroke 1.2) crossed by full-length hairlines, in Halftone Black, centred on the top-right corner of every section title film and the case-study title.
- **Halftone screens:** round dots in a square cell. Yellow screen: 11px cell, dot to 41%, multiply. Grey screen: 7px cell, dot to 22%, Halftone Black at 55% opacity, multiply.
- **Rules:** a 1.5px Halftone Black rule heads every list or table; 1px Hairline Grey-Green rules divide its rows. On ink films the divider is paper at 18% opacity.
- **Icons:** 24px grid, 1.9 stroke, square caps, mitred joins, `currentColor`. The set is an up-right arrow, a filled star, a filled play triangle and a two-bar pause.
- **Dashed token:** the predicted token uses a 1.5px dashed yellow outline drawn inside its box.

## Components

### Buttons (Actions)
Printed tabs, not pills: flat, square, uppercase, with an up-right arrow.
- **Shape:** square corners (0px), inline-flex with a 0.5em gap before a 1em arrow icon.
- **Default:** Clean Slip Paper fill with Halftone Black label, padding 0.7em 1em, in the action-label type role.
- **On a slip:** the fill switches to Light-Table Film Base so the tab reads as its own piece of paper.
- **Primary:** Tram Yellow fill. One per slip at most, used for the page's next step ("How it works", "Source and download", "Go to the home page") and for the LinkedIn tab.
- **Hover:** misregistration. A Walid Teal pass under the label, multiply-blended, slides from (0, 0) to (4px, 3px) and fades to 35% opacity (0.25s transform on the system ease, 0.2s opacity), the way a press drifts out of register. No colour change on the label, no lift.
- **Focus:** the global 2px Deep Teal Ink outline at a 3px offset.
- Actions never grey out with the spot-ink focus.

### Paper Slips (Cards / Containers)
The reading surface.
- **Corner Style:** square (0px).
- **Background:** Clean Slip Paper, Halftone Black text.
- **Shadow Strategy:** none; see Elevation & Depth.
- **Border:** none. Crop marks sit outside the corners on every slip that carries a section's main content.
- **Internal Padding:** `clamp(18px, 2.2vw, 32px)`; paragraphs separated by 0.85em; a lede may open the slip.
- **Caption slips:** a smaller slip (padding 10px 14px, 0.9375rem, max-content width) tucked under a clip, overlapping it by 10px and offset 18px in, rotated about -1.2° to -1.4°, opening with a Deep Teal Ink run-in label.

### Films (Title plates and data plates)
- **Ink film:** Halftone Black with paper type. Used for WALID, every other section title, the token strip, the Kaggle board, two Dowse pipeline steps, the first OCR era, the closing SAY HELLO plate and the 404.
- **Teal film:** Walid Teal at 86%, multiply, ink type. Used for HADRI, the alternate section titles, the Dowse case word, the second era and the second pipeline step. Section titles alternate ink and teal down the page.
- **Screen film:** the yellow halftone as a plate (the third OCR era); type sits on it in ink.
- Every section title film carries a registration target on its top-right corner.
- **Closing plate:** the whole SAY HELLO film is the LinkedIn link; on hover the display word turns Tram Yellow.

### Navigation
- **Section links:** top left, label role. The name is Halftone Black; section links are Press Grey with no underline until hover, when a teal underline appears. They wrap to two lines on narrow screens.
- **LinkedIn tab:** a primary (yellow) action fixed 14px from the top and one gutter from the right, with the fixed-tab lift. Always visible, always in colour.
- **Skip link:** a default action hidden above the viewport, dropping in at top left on focus.

### Token Strip (Chips)
The GitHub banner's sentence printed as a tokenizer would split it.
- **Style:** an ink film strip (padding 10px 12px, rotated 0.4°) holding mono chips: Clean Slip Paper fill, Halftone Black text, padding 4px 7px, 6px apart for a new word and 1px apart for a joined sub-word ("local" + "-first").
- **Predicted token:** the last chip, "work", is transparent with Tram Yellow text and a 1.5px dashed yellow outline inside its edge, followed by a 2px yellow caret that blinks four times and stops.
- The strip carries one accessible label with the full sentence; the chips are hidden from assistive tech. The case-study pipeline reuses the chip style for its query tokens.

### Spec List
Measured facts on a slip.
- A mono definition list at 0.875rem headed by the 1.5px ink rule; each row is a flex line with the term in Press Grey on the left and the value at weight 600 on the right, 9px vertical padding, 1px hairline below.
- A source note follows in Press Grey at 0.8125rem. Every number on the list has a source.
- **On an ink film** (the Kaggle board) the same pattern inverts: label heading and terms in Film Grey, large mono values in paper, paper hairlines at 18%, and the improved figure in Tram Yellow.
- **Benchmark table** (case study): the same grammar as a table, with label-style headers in Press Grey over the ink rule, mono tabular figures, and the total row filled Tram Yellow.

### Ledger
Experience and education as a printed register.
- A three-column grid per row: mono year (5.5rem column, 0.875rem, Press Grey), role in weight 700 followed by "· organisation" in Press Grey, and place right-aligned at 0.875rem. Rows have 13px vertical padding and 1px hairlines; the first row carries the 1.5px ink rule on top.
- A label-role subheading (Press Grey) separates education from experience.
- Below 860px the place drops under the role in the second column.
- The writing list follows the same pattern: a mono date column (9.5rem) beside the article title at weight 650, with the link underline hidden until hover.

### Clip (Signature)
A screen recording printed as a film.
- An ink-backed figure holding a muted, looping, inline video with a poster frame. It plays only while at least 20% of it is visible and pauses otherwise.
- **Pause control:** a small paper button bottom-right (10px inset, padding 8px 10px, 0.75rem uppercase, pause or play icon plus "Pause" or "Play"), reporting its state with `aria-pressed`. Hidden until the clip is hovered or the button is focused, and always visible once pressed or on touch devices. A pause made by the visitor holds until they press Play again.
- The video is masked by the halftone develop (below) and carries spot ink.

### Halftone Screens
Decorative fields behind compositions: yellow and grey dot screens (see Shapes) on the deepest parallax layer, hidden from assistive tech, removed below 860px.

### Links and Browser Surfaces
- **Links:** inherit text colour, 1.5px underline at a 0.2em offset in Walid Teal; on hover the underline takes the text colour (0.15s). List and nav links hide the underline until hover.
- **Focus:** a two-surface ring, `outline: 2px solid` at a 3px offset with a 2px radius, on every focusable element. On paper and the film base it is Deep Teal Ink (6.1:1 on paper, 5.3:1 on base). Inside ink films and screen recordings, where the clip pause buttons sit, it switches to Walid Teal (5.5:1 on Halftone Black).
- **Selection:** Tram Yellow background with Halftone Black text.
- **Caret:** Walid Teal in inputs and text areas.
- **Scrollbar:** `scrollbar-color` Halftone Black thumb on Light-Table Film Base track.
- **Theme:** `color-scheme: light`, browser theme colour the film base. There is no dark theme.

### Motion Grammar
One easing everywhere: `cubic-bezier(0.16, 1, 0.3, 1)`, a long exponential settle.
- **Registration entrance** (first screen only, once): the hero films and slips start 8–16px out of register, each displaced in its own direction, and slide into place over 1.1s with staggered delays (0, 90, 170, 240ms on the home page; 0 and 120ms on the case study). It animates `transform`, leaving `rotate` and the parallax `translate` untouched.
- **Halftone develop:** clips and images are masked by a 10px dot screen whose dot radius animates (a registered `--dot` length). A latent image shows 1.1px dots; a developed one shows 7.2px dots, which cover the cell completely. The first-screen clip develops on load (1.6s after a 0.35s delay). Anything that starts below 85% of the first viewport begins latent and develops once, over 1.3s, as it rises past 82% of the viewport. Nothing above the fold ever starts latent.
- **Parallax:** see Elevation & Depth.
- **Section focus:** the spot-ink grey-out described under Colors, triggered by a centre band 20% of the viewport tall, with a 0.7s filter transition.
- **Hover:** the misregistration pass on actions (0.25s), underline colour on links (0.15s), the clip button fade (0.2s).
- **Reduced motion:** the registration entrance, the load develop and the caret blink are removed; images are never set latent and always render as fully developed; the parallax script does not run; clips do not autoplay and wait for Play; the action hover still shows its offset pass, but instantly. The section-focus colour change remains. The page is complete without the script.
- **Still captures:** a `?still` query renders the settled state (no entrance, no develop, no parallax, no focus grey-out) for screenshots.

## Do's and Don'ts

### Do:
- **Do** lay every page on the Light-Table Film Base (#e4e7e1) and put all running text on Clean Slip Paper (#f7f7f5).
- **Do** keep to two spot inks: Walid Teal for identity and links; Tram Yellow for the found result and the one next action.
- **Do** set teal as text only in Deep Teal Ink (#08695f), draw the focus ring in Deep Teal Ink on light surfaces and in Walid Teal on ink, and set yellow as text only on ink films.
- **Do** carry hierarchy on Archivo's width axis: 62% display, 68% headline, 75% title, 82% label and action, 100% body.
- **Do** tilt films and slips between 0.3° and 1.6°, alternating direction with the neighbour, never past 1.6°, and overlap media and slip by 10–48px.
- **Do** put a registration target on the top-right corner of every section title film and crop marks outside the corners of every main slip.
- **Do** give a title film and its slip the same parallax depth, keep first-screen layers resting at zero, and put halftone screens on the deepest layer.
- **Do** write parallax to `translate`, the entrance to `transform` and the hand-laid tilt to `rotate`, so the three never fight.
- **Do** print every screen recording through the Clip: halftone develop, plays only while visible, a pause button that the visitor's choice overrides.
- **Do** honour reduced motion with a complete still page: no entrance, no develop, no parallax, no autoplay.

### Don't:
- **Don't** return to the old dark, neon-green monospace terminal look, and don't add a dark theme; this world is a light table.
- **Don't** introduce a third accent hue or use teal and yellow interchangeably.
- **Don't** round corners; the only radius in the system is the 2px on the focus outline.
- **Don't** add drop shadows to films or slips, and don't fake depth with solid black offset shadows; the only offset plate is the teal misregistration pass on hover, at 35% multiply.
- **Don't** set work as a grid of same-size cards, or align films and slips edge to edge without overlap or tilt.
- **Don't** set sentences, headings or buttons in mono, or numbers with units in the grotesk.
- **Don't** put paragraphs on a film or a halftone screen, or yellow text on paper.
- **Don't** add a second entrance animation; registration happens once, on the first screen.
- **Don't** set a label above a display or headline film as a kicker; labels name lists, columns and run-in captions only.
