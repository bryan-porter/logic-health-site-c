import Link from "next/link";

import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-primary-600">LogicHM</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Turnkey CCM & RPM for physician practices
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Solutions</h4>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Company</h4>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Resources</h4>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 pt-8">
          <div className="mb-4 text-center text-xs text-neutral-500">
            <p>HIPAA-compliant | SOC 2 Type II certified | Business Associate Agreement included</p>
          </div>
          <div className="text-center text-sm text-neutral-600">
            <p>&copy; {new Date().getFullYear()} Logic Health Management. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
