"use client";

import React from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/tracking";

interface TrackedCtaButtonProps {
  eventName?: string;
  eventProps?: Record<string, unknown>;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

const TrackedCtaButton: React.FC<TrackedCtaButtonProps> = ({
  eventName = "cta_clicked",
  eventProps,
  href,
  children,
  onClick,
  disabled,
  type = "button",
  className,
  style,
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
      onClick(e);
    }
  };

  if (href) {
    // Link mode
    return (
      <Link href={href} onClick={handleClick} className={className} style={style}>
        {children}
      </Link>
    );
  }

  // Button mode
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
};

export default TrackedCtaButton;
