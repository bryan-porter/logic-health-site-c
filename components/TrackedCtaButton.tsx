"use client";

import React from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/tracking";

interface TrackedCtaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  eventName?: string;
  eventProps?: Record<string, unknown>;
  href?: string;
  children: React.ReactNode;
}

const TrackedCtaButton: React.FC<TrackedCtaButtonProps> = ({
  eventName = "cta_clicked",
  eventProps,
  href,
  children,
  onClick,
  disabled,
  type = "button",
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    const label = typeof children === "string" ? children : undefined;

    trackEvent(eventName, {
      label,
      ...eventProps,
    });

    if (onClick) {
      // Preserve any existing onClick behavior
      // Cast because HTMLElement covers both button and anchor
      (onClick as React.MouseEventHandler<HTMLElement>)(e);
    }
  };

  if (href) {
    // Link mode: do not pass "type" to Link
    return (
      <Link href={href} onClick={handleClick} {...rest}>
        {children}
      </Link>
    );
  }

  // Button mode
  return (
    <button type={type} onClick={handleClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default TrackedCtaButton;
