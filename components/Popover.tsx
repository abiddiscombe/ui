// [ abiddiscombe/ui ] Popover

import {
  Popover as HuiPopover,
  PopoverButton as HuiPopoverButton,
  type PopoverProps as HuiPopoverProps,
} from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaPopover = cva("[&>div:first-of-type]:outline-0");

/**
 * Renders the base frame and trigger for a PopoverPanel.
 *
 * @author abiddiscombe
 */

export default function Popover(
  p: HuiPopoverProps &
    VariantProps<typeof cvaPopover> & {
      trigger: React.ReactElement;
      children: React.ReactElement;
    },
) {
  return (
    <HuiPopover
      {...p}
      as="nav"
      className={twMerge(cvaPopover({ className: p.className }))}
    >
      <HuiPopoverButton as="div">{p.trigger}</HuiPopoverButton>
      {p.children}
    </HuiPopover>
  );
}
