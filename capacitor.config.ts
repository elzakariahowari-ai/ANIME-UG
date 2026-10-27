import type { CapacitorConfig } from "@capacitor/cli";

/**
 * Capacitor configuration for packaging ANIME UG as an Android APK.
 *
 * Cinema Mode Support:
 * - Dynamic Landscape locking during watch route playback
 * - Automatic status bar immersive hiding during video playback
 * - Reverts back to natural portrait upon closing the player
 */
const config: CapacitorConfig = {
  appId: "com.animeug.app",
  appName: "ANIME UG",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  plugins: {
    StatusBar: {
      overlaysWebView: true,
    },
    ScreenOrientation: {},
  },
};

export default config;
