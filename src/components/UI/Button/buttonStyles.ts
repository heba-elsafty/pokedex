import { clx } from "@/utils/helper";

export type Variant = "primary" | "outline" | "ghost";
export type Size = "sm" | "md";

export const baseClasses = clx(
  "inline-flex items-center justify-center gap-1.5 rounded-control",
  "border border-transparent font-medium cursor-pointer transition-colors",
  "disabled:opacity-40 disabled:cursor-not-allowed",
);

export const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2 text-[0.95rem]",
};

export const variantClasses: Record<
  Variant,
  { base: string; active?: string }
> = {
  primary: {
    base: "bg-primary text-white enabled:hover:bg-primary-hover",
  },
  outline: {
    base: "bg-surface border-border text-ink enabled:hover:bg-muted",
    active: "bg-primary border-primary text-white",
  },
  ghost: {
    base: "bg-transparent text-ink-muted enabled:hover:bg-muted",
    active: "bg-surface text-ink shadow-sm",
  },
};
