# ANIME UG

An Arabic, RTL, dark-themed anime streaming web app (mobile-first) built with React 19 +
TanStack Start, ready to be packaged as an Android APK with Capacitor.

**Content policy (hard requirement):** the app ships with _no invented titles, episodes, or
stream URLs_. The current catalog is clearly labeled demo content, limited to verified
open-license works (Blender Foundation CC-BY films streamed from archive.org's official
copies, and public multi-resolution test clips from test-videos.co.uk). Every stream URL was
verified to respond with `video/mp4` before being added. Real anime may only be added by
plugging a **licensed provider API** into `src/lib/catalog.ts` — see "Adding licensed content"
below. No unauthorized scraping, ever.

## Features

- Arabic UI with full RTL support, dark anime-inspired design system (`src/styles.css`)
- Home, search, categories, anime details, episode list, favorites, watch history
- Favorites and history persist in `localStorage` (SSR-safe store in `src/lib/library.ts`)
- Video player with:
  - Quality selector (480p / 720p / 1080p **only when the source provides them**; switching
    preserves the current playback position)
  - Arabic subtitle selection with a timing offset control (±0.5 s steps)
  - Resume from where you left off, progress reporting to watch history
- Responsive layout optimized for Android phone screens; the watch page is immersive
  (header/bottom nav hidden) and video supports native fullscreen

## Web development

```bash
bun install     # or npm install
bun dev         # dev server
bun run test    # vitest (routing + catalog content rules)
bun run build   # production build
```

## Adding licensed content

All catalog data lives in `src/lib/catalog.ts`. To add real anime:

1. Obtain an authorized source (a licensed API/provider you have rights to, or content you
   own).
2. Replace or extend `CATALOG` with entries whose data comes from that source, setting
   `contentFlag: "licensed-provider"` and a real `licenseNoteAr` for each.
3. Keep `contentFlag: "demo-verified-open-license"` (and the demo badge shown in the UI) for
   anything still served from the open-license demo list, so demo and licensed content are
   never visually confused.
4. Do not enter any stream URL that has not been verified (HTTP 200 + `video/mp4`).

## Packaging for Android (APK) with Capacitor

Prerequisites on your machine: **Node.js 20+**, **JDK 17**, **Android Studio** (with the
Android SDK), and Git.

### Step 0 — Publish the web app (recommended path)

This app is a TanStack Start **SSR** app, so the simplest reliable Capacitor setup is to load
your published URL inside the Android WebView:

1. Publish the web app and note the URL, e.g.
   `https://your-domain.com`.
2. In `capacitor.config.ts` (already created in the project root), point `server.url` at it:

```ts
const config: CapacitorConfig = {
  appId: "com.animeug.app",
  appName: "ANIME UG",
  webDir: "dist",
  server: {
    androidScheme: "https",
    url: "https://your-domain.com", // <-- your published URL
  },
};
```

This gives you the full SSR app inside the APK; updates to the web app reflect without
rebuilding the APK (the WebView loads the live site).

### Step 1 — Install Capacitor

```bash
bun add @capacitor/core @capacitor/cli @capacitor/android @capacitor/screen-orientation @capacitor/status-bar
# or: npm i @capacitor/core @capacitor/cli @capacitor/android @capacitor/screen-orientation @capacitor/status-bar
```

`capacitor.config.ts` is already provided and pre-configured for dynamic landscape video rotation and immersive status bar hiding. In `android/app/src/main/AndroidManifest.xml`, keep `android:screenOrientation="unspecified"` (Capacitor default) so the screen can rotate to Landscape during video playback and return to Portrait when exiting.

### Step 2 — Create the Android project and sync

```bash
npx cap add android
npx cap sync android
```

### Step 3 — Open Android Studio and build the APK

```bash
npx cap open android
```

Then in Android Studio: **Build → Build Bundle(s)/APK(s) → Build APK(s)**.
The debug APK is written to
`android/app/build/outputs/apk/debug/app-debug.apk`.

From the command line instead:

```bash
cd android
./gradlew assembleDebug      # debug APK
./gradlew assembleRelease    # release APK (needs signing, below)
```

### Step 4 — Sign a release APK (for distribution)

```bash
keytool -genkey -v -keystore anime-ug.keystore -alias anime-ug \
  -keyalg RSA -keysize 2048 -validity 10000
```

Add the keystore to `android/app/build.gradle` (or `gradle.properties`), then run
`./gradlew assembleRelease`. Keep the keystore safe — it is your app's identity.

### Step 5 — After every web update

```bash
npx cap sync android   # then rebuild in Android Studio / gradlew
```

### Notes

- The Android app needs the `INTERNET` permission (added automatically by Capacitor).
- App icon and splash screen: generate them into `android/app/src/main/res` (Android Studio's
  _Image Asset_ tool works well).
- If you prefer a fully offline APK instead of the `server.url` approach, you must convert the
  app to a static SPA export and point `webDir` at that build output — this requires extra
  TanStack Start static/prerender configuration and is out of scope here.
- **No APK has been generated in this project** — the web app was built and tested; the APK is
  produced on your machine with the steps above.

## Tests

`src/test/app-routing.test.tsx` checks the router resolves `/` to a real page.
`src/test/catalog.test.ts` enforces the content rules: every catalog entry must be clearly
flagged, carry a license note, have unique ids, and only reference verified HTTPS stream hosts.
