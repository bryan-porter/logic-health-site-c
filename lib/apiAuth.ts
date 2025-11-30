import type { NextRequest } from "next/server";

export const PUBLIC_API_HEADER = "x-public-api-key";

/**
 * Verify the public API key from request headers
 *
 * @param req - The incoming request
 * @returns true if authorized (or auth disabled), false otherwise
 *
 * Behavior:
 * - If PUBLIC_API_KEY env var is NOT set, auth is disabled (allow all)
 * - If PUBLIC_API_KEY is set, require matching x-public-api-key header
 */
export function verifyPublicApiKey(req: NextRequest): boolean {
  const serverKey = process.env.PUBLIC_API_KEY;

  // 1. If env var is missing, Auth is DISABLED (allow everything in dev)
  if (!serverKey) return true;

  // 2. Check header
  const clientKey = req.headers.get(PUBLIC_API_HEADER);
  if (!clientKey) return false;

  // 3. Validate
  return clientKey === serverKey;
}
