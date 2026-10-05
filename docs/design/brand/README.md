# Jotern brand kit

Identity v1, October 2026. Source: [`jotern-identity.html`](jotern-identity.html) (open it in a browser; it needs the internet for the Google Fonts).

> Jot it daily. Hand it in weekly.

## Files

| File | What it is | Use it for |
|---|---|---|
| `jotern-icon-ink.svg` | Ink tile, paper stroke, highlighter dot | The main app icon and favicon |
| `jotern-icon-highlighter.svg` | Highlighter tile, ink stroke, red dot | The icon in the lockup; on ink backgrounds |
| `jotern-icon-paper.svg` | Paper tile, ink stroke, red dot | On white or very light screens |
| `jotern-mark-only-paper-stroke.svg` | The "j" alone, paper stroke, highlighter dot | On ink or highlighter backgrounds |
| `jotern-mark-only-ink-stroke.svg` | The "j" alone, ink stroke, red dot | On paper or white backgrounds |
| `jotern-lockup-on-ink.svg` / `-on-paper.svg` | Icon + wordmark on a background | Slides, the README header |
| `jotern-lockup-transparent-light.svg` / `-dark.svg` | Icon + wordmark, no background | Placing on your own frames |
| `png/` | The same, rendered: the ink icon at 16, 32, 48, 64, 192 and 512 px; the others at 512 px; lockups at 4× | Anywhere SVG isn't accepted |
| `tokens.css` | The `--jt-*` CSS variables, light and dark | `web/src/styles.css` |
| `tokens.json` | The same tokens in the W3C design-tokens format | Figma variables, other tools |

The wordmarks are **outlined** (text turned into shapes), so they look right without the fonts installed.

## Rules

- Colours: Ink `#1B2A5C`, Paper `#F3F5FA`, Highlighter `#FFD84A`, Margin red `#E5484D`, Pencil `#6B7490`.
- Type: Bricolage Grotesque 800 and 500 for display (tracking −3 to −4%), Public Sans 400 and 600 for text, JetBrains Mono 400 and 600 for dates, times and Markdown.
- Scale: Display 48 · Heading 28 · Body 16 · Label 12.
- Clear space around the mark: **x = the width of the dot**.
- The "jot" highlight is always Highlighter yellow; never recolour it.
- Smallest sizes: 16, 32, 48, 64 px (use the ink icon).

## Voice

Short, direct, written for someone tired at 5 pm. Buttons name the action ("Jot today", "Export week"); offline is normal, so say where the data is ("You're offline. Everything is saved on this laptop."); casual, not cute.
