/**
 * Error handling utilities
 * Provides type guards and assertion helpers for unknown error values.
 */

/**
 * Asserts that the provided value is an instance of Error.
 * If the value is not an Error, it throws a new Error with the stringified value.
 * This helps narrow the type from `unknown` to `Error` in TypeScript.
 */
export function assertError(error: unknown): asserts error is Error {
  if (!(error instanceof Error)) {
    // Throw a generic Error with the original value stringified for debugging.
    throw new Error(String(error));
  }
}

/**
 * Safely extracts the message from an unknown error.
 * Returns the message if the error is an Error, otherwise returns a generic string.
 */
export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
