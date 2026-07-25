import type { ComponentPropsWithoutRef, ElementType } from "react";
import { clx } from "../../../utils/helper";

type CardOwnProps<T extends ElementType> = {
  as?: T;
  hoverable?: boolean;
  className?: string;
};

type CardProps<T extends ElementType> = CardOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof CardOwnProps<T>>;

export default function Card<T extends ElementType = "div">({
  as,
  hoverable = false,
  className = "",
  ...rest
}: CardProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const classNames = clx(
    "bg-surface rounded-card shadow-sm p-4",
    { "hover:shadow-md transition-shadow": hoverable },
    className,
  );

  return <Component className={classNames} {...rest} />;
}
