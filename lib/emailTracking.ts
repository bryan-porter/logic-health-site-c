import crypto from "crypto";

export interface TrackingPayload {
  target: string;   // Final redirect URL
  campaign?: string;
  cid?: string;     // Optional: specific Contact ID (1:1 mode)
}

interface TokenWrapper {
  data: string;
  signature: string;
}

/**
 * Base64Url encode a string (URL-safe, no padding)
 */
function base64UrlEncode(str: string): string {
  return Buffer.from(str, "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/**
 * Base64Url decode a string
 */
function base64UrlDecode(str: string): string {
  // Add back padding if needed
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  return Buffer.from(base64, "base64").toString("utf-8");
}

/**
 * Create a signed tracking token from a payload
 */
export function createTrackingToken(payload: TrackingPayload): string {
  const secret = process.env.EMAIL_TRACKING_SECRET;
  if (!secret) {
    throw new Error("EMAIL_TRACKING_SECRET environment variable is not set");
  }

  // Create versioned payload
  const versionedPayload = {
    v: "v1",
    ...payload,
  };

  // Serialize to JSON
  const dataJson = JSON.stringify(versionedPayload);

  // Create HMAC signature
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(dataJson);
  const signature = hmac.digest("hex");

  // Create wrapper object
  const wrapper: TokenWrapper = {
    data: dataJson,
    signature,
  };

  // Encode as Base64Url
  const wrapperJson = JSON.stringify(wrapper);
  return base64UrlEncode(wrapperJson);
}

/**
 * Verify and decode a tracking token
 * Returns the payload if valid, null if invalid
 */
export function verifyTrackingToken(token: string): TrackingPayload | null {
  try {
    const secret = process.env.EMAIL_TRACKING_SECRET;
    if (!secret) {
      throw new Error("EMAIL_TRACKING_SECRET environment variable is not set");
    }

    // Decode Base64Url
    const wrapperJson = base64UrlDecode(token);
    const wrapper: TokenWrapper = JSON.parse(wrapperJson);

    // Verify signature
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(wrapper.data);
    const expectedSignature = hmac.digest("hex");

    if (wrapper.signature !== expectedSignature) {
      console.error("Signature verification failed");
      return null;
    }

    // Parse payload
    const payload = JSON.parse(wrapper.data);

    // Basic validation
    if (!payload.target || typeof payload.target !== "string") {
      console.error("Invalid payload: missing or invalid target");
      return null;
    }

    return {
      target: payload.target,
      campaign: payload.campaign,
      cid: payload.cid,
    };
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
}

/**
 * Create a complete tracked URL
 */
export function createTrackedUrl(baseUrl: string, payload: TrackingPayload): string {
  // Normalize baseUrl (strip trailing slash)
  const normalizedBase = baseUrl.replace(/\/$/, "");

  // Generate token
  const token = createTrackingToken(payload);

  // Return full URL
  return `${normalizedBase}/email/${token}`;
}
