import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "admin_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

/**
 * Get the admin password from environment variables
 * Throws if not set
 */
export function getAdminPassword(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error(
      "ADMIN_PASSWORD is not set in environment variables. " +
        "Please add ADMIN_PASSWORD to your .env file."
    );
  }
  return password;
}

/**
 * Sign a value using HMAC-SHA256
 */
function signValue(value: string, secret: string): string {
  const hmac = createHmac("sha256", secret);
  hmac.update(value);
  return hmac.digest("hex");
}

/**
 * Verify a signed value
 */
function verifySignature(value: string, signature: string, secret: string): boolean {
  const expectedSignature = signValue(value, secret);

  // Use timing-safe comparison to prevent timing attacks
  if (signature.length !== expectedSignature.length) {
    return false;
  }

  const sigBuffer = Buffer.from(signature, "hex");
  const expectedBuffer = Buffer.from(expectedSignature, "hex");

  return timingSafeEqual(sigBuffer, expectedBuffer);
}

/**
 * Generate a session cookie value
 * Format: timestamp.signature
 */
export function generateSessionCookie(): string {
  const password = getAdminPassword();
  const timestamp = Date.now().toString();
  const signature = signValue(timestamp, password);

  return `${timestamp}.${signature}`;
}

/**
 * Verify a session cookie value
 */
export function verifySessionCookie(cookieValue: string): boolean {
  try {
    const password = getAdminPassword();
    const [timestamp, signature] = cookieValue.split(".");

    if (!timestamp || !signature) {
      return false;
    }

    // Verify the signature
    const isValid = verifySignature(timestamp, signature, password);

    if (!isValid) {
      return false;
    }

    // Optional: Check if cookie has expired (older than 7 days)
    const cookieAge = Date.now() - parseInt(timestamp, 10);
    const maxAge = COOKIE_MAX_AGE * 1000; // Convert to milliseconds

    if (cookieAge > maxAge) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Check if a request has a valid admin session cookie
 */
export function isAdminAuthenticated(cookieValue: string | undefined): boolean {
  if (!cookieValue) {
    return false;
  }

  return verifySessionCookie(cookieValue);
}

/**
 * Generate a Set-Cookie header for admin session
 */
export function generateSetCookieHeader(): string {
  const cookieValue = generateSessionCookie();

  return `${COOKIE_NAME}=${cookieValue}; HttpOnly; Secure; SameSite=Strict; Path=/admin; Max-Age=${COOKIE_MAX_AGE}`;
}

/**
 * Get the cookie name (useful for reading cookies)
 */
export function getAdminCookieName(): string {
  return COOKIE_NAME;
}
