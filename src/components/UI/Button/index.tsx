import type { ComponentPropsWithoutRef, ElementType } from "react";
import { clx } from "../../../utils/helper";
import { baseClasses, sizeClasses, variantClasses, type Size, type Variant } from "./buttonStyles";

type ButtonOwnProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  size?: Size;
 
  active?: boolean;
  className?: string;
};

type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

 
export default function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  active = false,
  className = "",
  ...rest
}: ButtonProps<T>) {
  const Component = (as ?? "button") as ElementType;
  const variantClass = (active && variantClasses[variant].active) || variantClasses[variant].base;

  const classNames = clx(baseClasses, sizeClasses[size], variantClass, className);

 
  return <Component className={classNames} {...(rest as any)} />;
}
