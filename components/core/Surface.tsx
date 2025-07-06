// [ abiddiscombe/ui ] Surface

import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaSurface = cva(
  "overflow-hidden rounded border border-neutral-200 bg-white p-4 shadow-xs",
);

/**
 * Renders a foreground container for content.
 *
 * @author abiddiscombe
 */

export default function Surface(
  p: React.HTMLAttributes<HTMLElement> &
    VariantProps<typeof cvaSurface> & {
      as?: React.ElementType;
    },
) {
  const Tag = p.as ?? "div";

  return (
    <Tag
      {...p}
      className={twMerge(
        cvaSurface({
          className: p.className,
        }),
      )}
    />
  );
}
