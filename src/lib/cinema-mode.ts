/**
 * Cinema Mode Controller for ANIME UG:
 * Automatically manages true Fullscreen and Landscape screen rotation
 * across mobile browsers and Capacitor Android APKs.
 * Restores orientation and UI cleanly on exit.
 */

interface VendorFullscreenElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void> | void;
  mozRequestFullScreen?: () => Promise<void> | void;
  msRequestFullscreen?: () => Promise<void> | void;
}

interface VendorFullscreenDocument extends Document {
  webkitFullscreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
  msFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void> | void;
  mozCancelFullScreen?: () => Promise<void> | void;
  msExitFullscreen?: () => Promise<void> | void;
}

interface VendorScreenOrientation {
  lock?: (orientation: string) => Promise<void>;
  unlock?: () => void;
}

interface VendorScreen extends Screen {
  orientation: ScreenOrientation & VendorScreenOrientation;
  lockOrientation?: (orientation: string) => boolean;
  webkitLockOrientation?: (orientation: string) => boolean;
  mozLockOrientation?: (orientation: string) => boolean;
  msLockOrientation?: (orientation: string) => boolean;
  unlockOrientation?: () => boolean;
  webkitUnlockOrientation?: () => boolean;
  mozUnlockOrientation?: () => boolean;
  msUnlockOrientation?: () => boolean;
}

interface CapacitorPlugins {
  ScreenOrientation?: {
    lock?: (opts: { orientation: string }) => Promise<void>;
    unlock?: () => Promise<void>;
  };
  StatusBar?: {
    hide?: () => Promise<void>;
    show?: () => Promise<void>;
  };
}

interface CapacitorWindow extends Window {
  Capacitor?: {
    isNativePlatform?: () => boolean;
    Plugins?: CapacitorPlugins;
  };
}

// Safely access Capacitor plugins if running inside Capacitor Android APK
function getCapacitorPlugin<K extends keyof CapacitorPlugins>(
  pluginName: K,
): CapacitorPlugins[K] | undefined {
  if (typeof window === "undefined") return undefined;
  const win = window as CapacitorWindow;
  return win.Capacitor?.Plugins?.[pluginName];
}

export function isCapacitor(): boolean {
  if (typeof window === "undefined") return false;
  const win = window as CapacitorWindow;
  return Boolean(win.Capacitor?.isNativePlatform?.());
}

/**
 * Enters Cinema Mode:
 * 1. Requests full-screen display on the target element.
 * 2. Locks device screen orientation to Landscape (via Screen Orientation API and Capacitor).
 * 3. Hides status bar in Capacitor.
 */
export async function enterCinemaMode(targetElement?: HTMLElement | null): Promise<boolean> {
  if (typeof window === "undefined") return false;

  const target = (targetElement || document.documentElement) as VendorFullscreenElement;
  let fullscreenSuccess = false;

  // 1. Request Fullscreen first (required by mobile browsers to allow orientation lock)
  try {
    const doc = document as VendorFullscreenDocument;
    const isAlreadyFullscreen = Boolean(
      doc.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement,
    );

    if (!isAlreadyFullscreen) {
      if (target.requestFullscreen) {
        await target.requestFullscreen();
        fullscreenSuccess = true;
      } else if (target.webkitRequestFullscreen) {
        await target.webkitRequestFullscreen();
        fullscreenSuccess = true;
      } else if (target.mozRequestFullScreen) {
        await target.mozRequestFullScreen();
        fullscreenSuccess = true;
      } else if (target.msRequestFullscreen) {
        await target.msRequestFullscreen();
        fullscreenSuccess = true;
      }
    } else {
      fullscreenSuccess = true;
    }
  } catch (err) {
    // Browsers may defer unprompted fullscreen until user interaction
    console.debug(
      "[CinemaMode] Fullscreen request deferred or blocked by browser gesture policy:",
      err,
    );
  }

  // 2. Lock Screen Orientation to Landscape
  try {
    // A. Capacitor ScreenOrientation plugin
    const capOrientation = getCapacitorPlugin("ScreenOrientation");
    if (capOrientation?.lock) {
      await capOrientation.lock({ orientation: "landscape" }).catch(() => {});
    }

    // B. Web Screen Orientation API
    const vScreen = window.screen as unknown as VendorScreen;
    const orientation = vScreen.orientation;
    if (orientation?.lock) {
      await orientation.lock("landscape").catch(() => {
        // Some devices support 'landscape-primary'
        return orientation.lock?.("landscape-primary").catch(() => {});
      });
    } else if (vScreen.lockOrientation) {
      vScreen.lockOrientation("landscape");
    } else if (vScreen.webkitLockOrientation) {
      vScreen.webkitLockOrientation("landscape");
    } else if (vScreen.mozLockOrientation) {
      vScreen.mozLockOrientation("landscape");
    } else if (vScreen.msLockOrientation) {
      vScreen.msLockOrientation("landscape");
    }
  } catch (err) {
    console.debug("[CinemaMode] Screen orientation lock not supported on this device/state:", err);
  }

  // 3. Hide Status Bar in Capacitor for immersive viewing
  try {
    const capStatusBar = getCapacitorPlugin("StatusBar");
    if (capStatusBar?.hide) {
      await capStatusBar.hide().catch(() => {});
    }
  } catch {
    // ignore
  }

  return fullscreenSuccess;
}

/**
 * Exits Cinema Mode:
 * 1. Unlocks screen orientation to restore natural rotation / portrait.
 * 2. Exits fullscreen.
 * 3. Shows status bar in Capacitor.
 */
export async function exitCinemaMode(): Promise<boolean> {
  if (typeof window === "undefined") return false;

  // 1. Unlock Screen Orientation
  try {
    const capOrientation = getCapacitorPlugin("ScreenOrientation");
    if (capOrientation?.unlock) {
      await capOrientation.unlock().catch(() => {});
    }

    const vScreen = window.screen as unknown as VendorScreen;
    const orientation = vScreen.orientation;
    if (orientation?.unlock) {
      orientation.unlock();
    } else if (vScreen.unlockOrientation) {
      vScreen.unlockOrientation();
    } else if (vScreen.webkitUnlockOrientation) {
      vScreen.webkitUnlockOrientation();
    } else if (vScreen.mozUnlockOrientation) {
      vScreen.mozUnlockOrientation();
    } else if (vScreen.msUnlockOrientation) {
      vScreen.msUnlockOrientation();
    }
  } catch (err) {
    console.debug("[CinemaMode] Screen orientation unlock failed:", err);
  }

  // 2. Exit Fullscreen
  try {
    const doc = document as VendorFullscreenDocument;
    const isFullscreen = Boolean(
      doc.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement,
    );

    if (isFullscreen) {
      if (doc.exitFullscreen) {
        await doc.exitFullscreen().catch(() => {});
      } else if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen().catch(() => {});
      } else if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen().catch(() => {});
      } else if (doc.msExitFullscreen) {
        await doc.msExitFullscreen().catch(() => {});
      }
    }
  } catch (err) {
    console.debug("[CinemaMode] Exit fullscreen failed:", err);
  }

  // 3. Show Status Bar in Capacitor
  try {
    const capStatusBar = getCapacitorPlugin("StatusBar");
    if (capStatusBar?.show) {
      await capStatusBar.show().catch(() => {});
    }
  } catch {
    // ignore
  }

  return true;
}
