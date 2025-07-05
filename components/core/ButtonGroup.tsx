import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaButtonGroup = cva(
  "inline-flex flex-wrap items-center justify-stretch gap-4",
);

type ButtonGroupProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof cvaButtonGroup> & {
    as?: React.ElementType;
  };

/**
 * @component
 * @description Returns an accessible container for Button elements.
 */

export default function ButtonGroup(p: ButtonGroupProps) {
  const Tag = p.as ?? "div";
  const classes = twMerge(
    cvaButtonGroup({
      className: p.className,
    }),
  );

  return <Tag {...p} className={classes} />;
}
