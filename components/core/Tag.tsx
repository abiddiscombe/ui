// [ abiddiscombe/ui ] Tag

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

/**
 * Renders an inline label for use as a visual tag.
 *
 * @author abiddiscombe
 */

export default function Tag(
  p: React.HTMLAttributes<HTMLElement> &
    VariantProps<typeof cvaTag> & {
      as?: React.ElementType;
    },
) {
  const Tag = p.as ?? "span";
  return (
    <Tag
      {...p}
      className={twMerge(
        cvaTag({ variant: p.variant, className: p.className }),
      )}
    />
  );
}
