import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  readonly variant?: "primary" | "secondary" | "outline";
  readonly size?: "sm" | "md" | "lg";
  readonly href?: string;
}

const variants = {
  primary:
    "bg-white text-cinema-black hover:bg-gray-100 shadow-lg shadow-white/10",
  secondary:
    "bg-gold hover:bg-gold-light text-cinema-black shadow-lg shadow-gold/20 font-semibold",
  outline:
    "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
} as const;

const sizes = {
  sm: "px-5 py-2.5 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
} as const;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

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
