import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaTag = cva("shrink-0 rounded px-2.5 py-1 text-sm", {
  variants: {
    variant: {
      red: "bg-red-200 text-red-800",
      blue: "bg-blue-200 text-blue-800",
      green: "bg-green-200 text-green-800",
      orange: "bg-orange-200 text-orange-800",
      neutral: "bg-neutral-200 text-neutral-800",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

type TagProps = React.HTMLAttributes<HTMLElement> & VariantProps<typeof cvaTag>;

/**
 *
 * @component
 * @description Returns an inline tag or label element.
 */

export default function Tag(p: TagProps) {
  const classes = twMerge(
    cvaTag({ variant: p.variant, className: p.className }),
  );

  return <span {...p} className={classes} />;
}
