import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaSpinner = cva(
  "block animate-spin rounded-full border-neutral-200 border-t-neutral-800 border-r-neutral-800",
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-3",
        lg: "h-12 w-12 border-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type SpinnerProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof cvaSpinner> & {
    children?: never;
  };

/**
 * @component
 * @description Returns a circular spinner / progress element.
 */

export default function Spinner(p: SpinnerProps) {
  const classes = twMerge(cvaSpinner({ size: p.size, className: p.className }));

  return (
    <span
      {...p}
      className={classes}
      role="progressbar"
      aria-busy="true"
      aria-valuetext="Please wait..."
    />
  );
}
