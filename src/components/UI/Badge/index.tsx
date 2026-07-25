import type { HTMLAttributes } from "react";
import { clx } from "../../../utils/helper";

type Props = HTMLAttributes<HTMLSpanElement>;

export default function Badge({ className = "", ...rest }: Props) {
  return (
    <span
      className={clx(
        "inline-block px-3 py-1 rounded-full text-white text-xs",
        "font-medium capitalize",
        className,
      )}
      {...rest}
    />
  );
}
