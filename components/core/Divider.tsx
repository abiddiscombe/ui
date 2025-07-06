// [ abiddiscombe/ui ] Divider

import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaDivider = cva("my-6 border-t border-t-neutral-200");

/**
 * Renders a horizontal line divider.
 *
 * @author abiddiscombe
 */

export default function Divider(
  p: React.HTMLAttributes<HTMLHRElement> & VariantProps<typeof cvaDivider>,
) {
  return (
    <hr {...p} className={twMerge(cvaDivider({ className: p.className }))} />
  );
}
