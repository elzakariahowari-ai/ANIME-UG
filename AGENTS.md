# ANIME UG — Agent Guidelines

## Project rules

- **Content catalog:** `src/lib/catalog.ts` is the single content source. Never invent titles,
  episodes, or stream URLs, and never scrape unauthorized sites. Only verified HTTPS streams
  from the allowlisted hosts (archive.org, test-videos.co.uk — open-license Blender films and
  public test clips) may ship; new licensed anime comes from a licensed provider API the user
  supplies, flagged `licensed-provider`. Demo content must always carry a `DemoBadge`.
  Enforced by `src/test/catalog.test.ts`.
- **Design system:** Arabic RTL (`lang="ar" dir="rtl"`), dark-only theme. All colors live as
  oklch tokens in `src/styles.css`; components use semantic tokens (no hardcoded color
  utilities). Fonts (Cairo/Changa) load via `<link>` in the root route head.
- **Persistence:** favorites and watch history go through `src/lib/library.ts` (localStorage +
  `useSyncExternalStore`, SSR-safe). Don't read/write these keys elsewhere.
- **Watch route is immersive:** the root shell hides header/bottom nav on any path starting
  with `/watch/`; keep that behavior when editing `src/routes/__root.tsx`.
- **Android packaging:** Capacitor config lives in `capacitor.config.ts`; exact steps are in
  README.md.
