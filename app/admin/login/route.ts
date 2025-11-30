import { NextRequest, NextResponse } from "next/server";
import { getAdminPassword, generateSetCookieHeader } from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();
    const password = formData.get("password") as string;

    if (!password) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      );
    }

    // Get the expected admin password
    const adminPassword = getAdminPassword();

    // Compare passwords (constant-time comparison would be ideal, but for simplicity)
    if (password !== adminPassword) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    // Password is correct - generate session cookie and redirect
    const setCookieHeader = generateSetCookieHeader();

    // Redirect to admin area with session cookie
    const response = NextResponse.redirect(new URL("/admin", request.url));
    response.headers.set("Set-Cookie", setCookieHeader);

    return response;
  } catch (error) {
    console.error("Error in admin login:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
