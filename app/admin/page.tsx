"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminIndexPage() {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (email) {
      router.push(`/admin/contact/${encodeURIComponent(email)}`);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Tools</h1>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Contact Inspector
          </h2>
          <p className="text-gray-600 mb-4">
            Look up contact identity mapping and event history by email address.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              required
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-md px-4 py-2 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Inspect
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
