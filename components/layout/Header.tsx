import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary-600">
            LogicHM
          </Link>
          <nav className="hidden md:flex md:gap-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-primary-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
