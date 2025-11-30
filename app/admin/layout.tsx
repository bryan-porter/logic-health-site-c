import { cookies } from "next/headers";
import { isAdminAuthenticated, getAdminCookieName } from "@/lib/adminAuth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get(getAdminCookieName());
  const isAuthenticated = isAdminAuthenticated(adminCookie?.value);

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Admin Access</h1>
              <p className="mt-2 text-sm text-gray-600">
                Enter the admin password to continue
              </p>
            </div>

            <form action="/admin/login" method="POST" className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  autoFocus
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Enter admin password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Access Admin
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
