// [ abiddiscombe/ui ] Dialog

import {
  Dialog as HuiDialog,
  type DialogProps as HuiDialogProps,
} from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaDialog = cva("relative z-50");

/**
 * Renders the base frame and trigger for a Dialog.
 *
 * @author abiddiscombe
 */

export default function Dialog(
  p: HuiDialogProps & VariantProps<typeof cvaDialog>,
) {
  return (
    <HuiDialog
      {...p}
      as="div"
      className={twMerge(cvaDialog({ className: p.className }))}
    />
  );
}
