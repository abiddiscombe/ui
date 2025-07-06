// [ abiddiscombe/ui ] DialogBase

import {
  DialogBackdrop as HuiDialogBackdrop,
  type DialogBackdropProps as HuiDialogBackdropProps,
} from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaDialogBase = cva(
  "fixed inset-0 bg-neutral-950/40 duration-200 ease-out data-closed:opacity-0",
  {
    variants: {
      blur: {
        true: "backdrop-blur-xs",
        false: null,
      },
    },
    defaultVariants: {
      blur: false,
    },
  },
);

/**
 * Renders the optional backdrop for a Dialog.
 *
 * @author abiddiscombe
 */

export default function DialogBase(
  p: HuiDialogBackdropProps & VariantProps<typeof cvaDialogBase>,
) {
  return (
    <HuiDialogBackdrop
      {...p}
      as="div"
      transition
      className={twMerge(
        cvaDialogBase({
          blur: p.blur,
          className: p.className,
        }),
      )}
    />
  );
}
