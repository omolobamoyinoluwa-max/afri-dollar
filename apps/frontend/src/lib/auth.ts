/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */

/**
 * Retrieves the authentication token from localStorage if running in a client context.
 *
 * @returns The authentication token string, or null if not found or not in browser.
 */
export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
};

// TODO: In production, avoid storing bearer tokens in localStorage to prevent XSS-based exfiltration.
// Move authentication to HttpOnly + Secure + SameSite cookies or a server-side session.
/**
 * Persists the authentication token in localStorage if running in a client context.
 *
 * @param token The authentication token string to store.
 */
export const setAuthToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
};

/**
 * Removes the authentication token from localStorage if running in a client context.
 */
export const removeAuthToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
  }
};
