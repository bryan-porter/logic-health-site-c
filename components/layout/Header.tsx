"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary-600 transition-colors hover:text-primary-700">
            LogicHM
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary-600"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons - Segmented */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <Link
              href="/contact?topic=mso-roi"
              className="rounded-md border border-primary-600 bg-white px-3 py-1.5 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            >
              See MSO/IPA ROI
            </Link>
            <Link
              href="/contact?topic=rhc-g0511"
              className="rounded-md bg-primary-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            >
              RHC/FQHC G0511 game plan
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200">
            <nav className="flex flex-col space-y-1 py-4">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-primary-50 text-primary-600"
                        : "text-neutral-700 hover:bg-neutral-50 hover:text-primary-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-4 mx-3 space-y-2">
                <Link
                  href="/contact?topic=mso-roi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md border border-primary-600 bg-white px-4 py-2 text-center text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50"
                >
                  See MSO/IPA ROI
                </Link>
                <Link
                  href="/contact?topic=rhc-g0511"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-700"
                >
                  RHC/FQHC G0511 game plan
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
