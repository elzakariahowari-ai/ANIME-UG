# Roadmap

## Done

- App shell: Arabic RTL dark theme, bottom nav, header, routing (home/search/categories/details/watch/favorites/history/about)
- Demo catalog with verified open-license streams (Blender films via archive.org + test clip) — per user request (2026-10-26): NO further demo entries will be added
- Locally generated WebM test asset (public/demo/demo-clip.webm) wired as an extra quality on the quality-test entry, for full player verification
- Video player: quality switching with position preservation, Arabic subtitle selection + non-compounding timing offset, resume, progress history
- Favorites/history persistence (localStorage store), content-rule tests (7 passing), Capacitor config + README packaging steps
- End-to-end verification passed: home, details, favorite toggle, playback, quality switch, subtitles + offset, history save + resume, search, categories, about; no page errors
- Supabase client integration enabled; @supabase/supabase-js installed so the generated client builds (build OK)

## Open

- [ ] Connect a licensed anime provider API — BLOCKED: user must supply the licensed source/API credentials
- [ ] Android APK build — BLOCKED: performed by the user on their machine per README.md steps
