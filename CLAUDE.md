# MOMIN GAMES — Website

## What this is
Portfolio website for a startup mobile game studio. The site showcases the list of games the studio has released on Google Play and the App Store.

## Studio identity
- Genre focus: casual, puzzle, hyper-casual
- Brand vibe: light, juicy, clean & clear
- Target feel: playful but not cluttered — the kind of energy that matches the games themselves

## Design direction
- Visual style should feel like the games: bright, bouncy, approachable
- Clean layouts with clear hierarchy — no noise
- "Juice" in interactions: subtle animations, satisfying micro-interactions
- Light color palette — avoid dark/heavy themes
- Typography: readable and friendly, not corporate
- Mobile-first, since the audience likely arrives from mobile

## Core content
- Game listing page: grid or card layout per released game
- Each game card should link out to Google Play and App Store
- Studio branding / about section

## Tech Stack
- Plain HTML + CSS + JS (no framework, no build tool)
- Google Fonts: Fredoka One (headings) + Nunito (body)
- No external JS libraries

## File Structure
```
index.html       — main page
css/style.css    — all styles (design tokens, layout, components)
js/main.js       — game data array + rendering logic + tab filter + mobile nav
assets/images/   — game icons go here when ready
Ref/             — reference site (The One Game Studio) — DO NOT ship
```

## Game Data
- Game data lives in `js/main.js` as the `GAMES` array at the top of the file
- Each entry: { id, title, genre, emoji, gradient, appstore, googleplay }
- Genre values: "casual" | "puzzle" | "hyper-casual"
- Replace emoji + gradient with real icon images when assets are ready
- Replace "#" placeholders in appstore/googleplay with real store URLs

## Design Tokens (css/style.css :root)
- --primary: #FF6B35 (coral orange)
- --purple: #7C3AED
- --green: #06D6A0
- --bg: #FFF8F3 (warm off-white)
- --text: #1A1A2E

## Reference site analysis
- theonegamestudio.com/product/ — WordPress/Elementor/WooCommerce (heavy)
- Their cards: icon + status badge + title, hover opens phone-frame iframe popup
- Our version: cards link directly to App Store + Google Play (no iframe popup)

## Reminders
- Keep the codebase simple — this is a portfolio site, not a complex app
- Prioritize visual polish over feature complexity
- Every design decision should pass the "does this feel like a game studio?" test
- When adding real game icons: use <img> tag in .card-icon, remove emoji span, keep gradient as fallback bg
