import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaDivider = cva("my-6 border-t border-t-neutral-200");

type DividerProps = React.HTMLAttributes<HTMLHRElement> &
  VariantProps<typeof cvaDivider>;

/**
 * @component
 * @descriptions Returns a horizontal line divider.
 */

export default function Divider(p: DividerProps) {
  const classes = twMerge(cvaDivider({ className: p.className }));

  return <hr {...p} className={classes} />;
}
