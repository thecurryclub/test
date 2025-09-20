"use client";
import { forwardRef } from "react";
import { cn } from "./cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost", size?: "sm"|"md"|"lg" };
const base = "inline-flex items-center justify-center font-semibold rounded-xl focus-ring transition";
const variants = {
  primary: "bg-brand text-white hover:opacity-90 shadow-soft",
  secondary: "bg-ink text-white hover:bg-ink/90",
  ghost: "bg-transparent text-ink hover:bg-brand/10"
};
const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2", lg: "px-5 py-2.5 text-base" };

const Button = forwardRef<HTMLButtonElement, Props>(function Button({ className, variant="primary", size="md", ...props }, ref) {
  return <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
});

export default Button;
