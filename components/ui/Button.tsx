import Link from "next/link";

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors";
  const sizeStyles = "px-6 py-3 text-base";

  const variantStyles = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "bg-white border-2 border-neutral-300 text-neutral-900 hover:border-primary-600",
    ghost: "text-primary-600 hover:bg-primary-50",
  };

  const styles = cn(baseStyles, sizeStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}
