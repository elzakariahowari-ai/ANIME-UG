/** Storage accepted by Supabase's `auth.storage` option; standard localStorage implementation. */
export interface PreviewAuthStorage {
  getItem: (key: string) => string | null | Promise<string | null>;
  setItem: (key: string, value: string) => void | Promise<void>;
  removeItem: (key: string) => void | Promise<void>;
}

/**
 * Standard browser authentication storage for Supabase.
 * Uses window.localStorage cleanly across all environments.
 */
export function brokeredPreviewStorage(): PreviewAuthStorage | undefined {
  if (typeof window === "undefined") return undefined;
  return localStorage;
}
