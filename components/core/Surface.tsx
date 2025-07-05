import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const cvaSurface = cva(
  "overflow-hidden rounded border border-neutral-200 bg-white p-4 shadow-xs",
);

type SurfaceProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof cvaSurface> & {
    as?: React.ElementType;
  };

/**
 *
 * @component
 * @description Returns a UI backdrop layer.
 */

export default function Surface(p: SurfaceProps) {
  const Tag = p.as ?? "div";
  const classes = twMerge(
    cvaSurface({
      className: p.className,
    }),
  );

  return <Tag {...p} className={classes} />;
}
