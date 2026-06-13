# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Your Name
- We will call you: "Essence"

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

---

## Repository Structure

This is a multi-project design gallery. The root `index.html` is a gallery page that links to all sub-designs:

| Path | Purpose |
|---|---|
| `index.html` | Root gallery — lists and links all sub-projects |
| `Demo1/` | Dark-edition prototype (Cormorant Garamond, charcoal bg) |
| `S2E2/src/` | Season 2 Episode 2 dedicated episode page (Tailwind + embedded CSS) |
| `E&E/src/` | **Production website** — the primary active project |

Each sub-project keeps its own `brandassets/` folder alongside its `src/` directory (e.g. `E&E/brandassets/`). From inside `src/`, asset paths use `../brandassets/`.

### E&E Production Site (`E&E/src/`)

**Files:** `index.html` · `style.css` · `script.js`  
**Fonts:** Fraunces (display/serif headings) + DM Sans (body, weight 300–500)  
**Brand palette (CSS vars in `:root`):**
- `--teal: #377d9b` — primary brand, buttons, active accents
- `--sky: #90d4f3` / `--sky-mid: #64abe3` — light accents, waveform, borders
- `--surface: #cbf2fa` / `--surface-2: #e3f8fd` — card and section backgrounds
- `--ink: #152030` / `--ink-mid: #2D4A5C` — primary and secondary text

**Nav anchors (in order):** `#vision` → `#episodes` → `#listen` → `#philanthropy`  
**JS pattern:** Minimal — scroll listener shrinks nav padding after 40px scroll; `IntersectionObserver` stagger-reveals `.ep-card` elements on entry.

---

## Local Server

- **Start:** `uv run serve.py` from the project root (serves at `http://localhost:3000`)
- **Stop:** `fuser -k 3000/tcp`
- Check before starting a new instance: `pgrep -f serve.py`
- Always use `http://localhost:3000` — never `file:///`

---

## Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).

## Output Defaults

- Tech Stack: Pure Semantic HTML5, Vanilla CSS3 (using CSS custom properties/variables), and Modern Vanilla JavaScript (ES6+).
- Structure: Deliver separate, clean files: `index.html`, `style.css`, and `script.js` (or a single beautifully encapsulated HTML file if requested).
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Mobile-first responsive

## Brand Assets

- Always check the `brandassets/` folder of the relevant sub-project before designing. **Note:** no underscore — `brandassets/`, not `brand_assets/`.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules

- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
