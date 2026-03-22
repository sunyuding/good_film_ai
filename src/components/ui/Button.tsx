import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  readonly variant?: "primary" | "secondary" | "outline";
  readonly size?: "sm" | "md" | "lg";
  readonly href?: string;
}

const variants = {
  primary:
    "bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/25",
  secondary:
    "bg-gold hover:bg-gold-dark text-cinema-black shadow-lg shadow-gold/25",
  outline:
    "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
