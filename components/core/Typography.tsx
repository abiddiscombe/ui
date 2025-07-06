// [ abiddiscombe/ui ] Typography

import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaTypography = cva("", {
  variants: {
    variant: {
      h1: "mb-2 text-2xl font-bold text-neutral-950",
      h2: "mb-2 text-xl font-semibold text-neutral-950",
      h3: "text-md mb-1 font-semibold text-neutral-950",
      body: "text-md mb-1 text-neutral-800 last-of-type:mb-6",
      subtext: "text-md mb-1 text-neutral-500 last-of-type:mb-6",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

/**
 * Renders heading elements or paragraph (body) text.
 *
 * @author abiddiscombe
 */

export default function Typography(
  p: React.HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof cvaTypography>,
) {
  const Tag =
    p.variant === "body" || p.variant === "subtext" ? "p" : (p.variant ?? "p");

  return (
    <Tag
      {...p}
      className={twMerge(
        cvaTypography({
          variant: p.variant,
          className: p.className,
        }),
      )}
    />
  );
}
