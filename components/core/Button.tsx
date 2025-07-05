import { twMerge } from "tailwind-merge";
import { Button as HuiButton } from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";

const cvaButton = cva(
  "h-8.5 max-h-8.5 shrink-0 cursor-pointer rounded border *:flex *:items-center *:justify-center *:gap-3 data-disabled:cursor-not-allowed sm:text-sm [&>span>svg]:h-4 [&>span>svg]:w-4",
  {
    variants: {
      kind: {
        text: "px-4",
        icon: "w-9 max-w-9",
      },
      working: {
        true: [
          "grid cursor-not-allowed grid-cols-1 grid-rows-1 place-items-center *:col-1 *:row-1 *:first-of-type:z-10 *:last-of-type:invisible *:last-of-type:z-0 *:aria-busy:h-4 *:aria-busy:w-4 *:aria-busy:animate-spin *:aria-busy:rounded-full *:aria-busy:border-2",
        ],
        false: "",
      },
      variant: {
        ghost:
          "border-transparent bg-transparent text-neutral-800 data-hover:border-neutral-100 data-hover:bg-neutral-100 data-hover:data-active:border-neutral-200 data-hover:data-active:bg-neutral-200",
        solid:
          "border-neutral-950 bg-neutral-950 text-white shadow-sm data-hover:border-neutral-800 data-hover:bg-neutral-800 data-hover:data-active:border-neutral-700 data-hover:data-active:bg-neutral-700",
        outlined:
          "border-neutral-200 text-neutral-800 shadow-xs data-hover:bg-neutral-100 data-hover:data-active:border-neutral-200 data-hover:data-active:bg-neutral-200",
        destructive:
          "border-red-600 bg-red-600 text-white shadow-xs data-hover:border-red-700 data-hover:bg-red-700 data-hover:data-active:border-red-800 data-hover:data-active:bg-red-800",
      },
    },
    defaultVariants: {
      kind: "text",
      working: false,
      variant: "outlined",
    },
    compoundVariants: [
      {
        working: true,
        variant: "ghost",
        className:
          "*:aria-busy:border-neutral-200 *:aria-busy:border-t-neutral-800 *:aria-busy:border-r-neutral-800",
      },
      {
        working: true,
        variant: "solid",
        className:
          "*:aria-busy:border-neutral-700 *:aria-busy:border-t-white *:aria-busy:border-r-white",
      },
      {
        working: true,
        variant: "outlined",
        className:
          "*:aria-busy:border-neutral-200 *:aria-busy:border-t-neutral-800 *:aria-busy:border-r-neutral-800",
      },
      {
        working: true,
        variant: "destructive",
        className:
          "*:aria-busy:border-red-800 *:aria-busy:border-t-white *:aria-busy:border-r-white",
      },
    ],
  },
);

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof cvaButton> & {
    working?: boolean;
    disabled?: boolean;
  };

/**
 * @component
 * @description Renders a button with support for iconography and loading states.
 */

export default function Button(p: ButtonProps) {
  const classes = twMerge(
    cvaButton({
      kind: p.kind,
      working: p.working,
      variant: p.variant,
      className: p.className,
    }),
  );

  return (
    <HuiButton
      {...p}
      data-hover={p.working}
      data-active={p.working}
      className={classes}
    >
      {p.working && (
        <span
          role="progressbar"
          aria-busy="true"
          aria-valuetext="Please wait..."
        />
      )}
      <span>{p.children}</span>
    </HuiButton>
  );
}
