// [ abiddiscombe/ui ] ButtonGroup

import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaButtonGroup = cva("inline-flex flex-wrap items-center gap-4");

/**
 * Renders an accessible container for button elements.
 *
 * @author abiddiscombe
 */

export default function ButtonGroup(
  p: React.HTMLAttributes<HTMLElement> &
    VariantProps<typeof cvaButtonGroup> & {
      as?: React.ElementType;
    },
) {
  const Tag = p.as ?? "div";

  return (
    <Tag
      {...p}
      className={twMerge(cvaButtonGroup({ className: p.className }))}
    />
  );
}
