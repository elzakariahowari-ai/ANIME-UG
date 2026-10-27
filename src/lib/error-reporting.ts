/**
 * Centralized application error reporting.
 * Logs runtime errors cleanly without third-party editor telemetry.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message = describeThrown(error);
  const stack = error instanceof Error ? error.stack : undefined;

  // Log in development and standard environments
  console.error("[ANIME UG Error]", {
    message,
    stack,
    route: window.location.pathname,
    ...context,
  });
}

const MAX_SERIALIZED_LENGTH = 2000;

function describeThrown(error: unknown): string {
  if (error instanceof Response) {
    return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
  }
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  const { message } = (error ?? {}) as { message?: unknown };
  if (typeof message === "string" && message.length > 0) return message;
  try {
    return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
  } catch {
    return String(error);
  }
}

// Backward compatibility alias
export const reportLovableError = reportError;
