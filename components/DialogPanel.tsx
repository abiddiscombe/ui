// [ abiddiscombe/ui ] DialogPanel

import {
  DialogPanel as HuiDialogPanel,
  DialogTitle as HuiDialogTitle,
  type DialogPanelProps as HuiDialogPanelProps,
} from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import Surface from "./core/Surface";
import Typography from "./core/Typography";

const cvaDialogPanel = cva(
  "fixed inset-0 grid h-dvh origin-bottom items-end justify-stretch duration-100 ease-in-out *:mx-auto *:w-full *:p-8 *:shadow-[0px_-2px_66px_4px_rgba(102,_102,_106,_0.62)] *:not-sm:rounded-b-none *:not-sm:border-x-0 *:not-sm:border-b-0 data-closed:scale-95 sm:origin-center sm:items-center *:sm:max-w-lg",
);

/**
 * Renders the main content of a Dialog.
 *
 * @author abiddiscombe
 */

export default function DialogPanel(
  p: HuiDialogPanelProps &
    VariantProps<typeof cvaDialogPanel> & {
      title: string;
      children: React.ReactNode;
    },
) {
  return (
    <HuiDialogPanel
      {...p}
      as="div"
      transition
      className={twMerge(cvaDialogPanel({ className: p.className }))}
    >
      <Surface>
        <HuiDialogTitle as={Typography} variant="h2">
          {p.title}
        </HuiDialogTitle>
        {p.children}
      </Surface>
    </HuiDialogPanel>
  );
}
