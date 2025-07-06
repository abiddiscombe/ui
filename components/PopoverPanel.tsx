// [ abiddiscombe/ui ] PopoverPanel

import {
  PopoverPanel as HuiPopoverPanel,
  type PopoverPanelProps as HuiPopoverPanelProps,
} from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import Surface from "./core/Surface";

const cvaPopoverPanel = cva(
  "w-[16em] max-w-[16em] origin-top p-1.5 transition duration-50 ease-in-out data-closed:scale-98 data-closed:opacity-0",
);

/**
 * Renders main content of a Popover.
 *
 * @author abiddiscombe
 */

export default function PopoverPanel(
  p: HuiPopoverPanelProps & VariantProps<typeof cvaPopoverPanel>,
) {
  return (
    <HuiPopoverPanel
      {...p}
      as={Surface}
      modal={true}
      transition={true}
      anchor={p.anchor ?? { to: "bottom end", gap: "1em" }}
      className={twMerge(cvaPopoverPanel({ className: p.className }))}
    />
  );
}
