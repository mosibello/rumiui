import { cn } from "@/lib/utils";

/**
 * DotPattern component that creates an efficient SVG dot pattern
 * @param {Object} props - Component props
 * @param {number} [props.width=16] - Pattern repeat width
 * @param {number} [props.height=16] - Pattern repeat height
 * @param {number} [props.x=0] - Pattern offset X
 * @param {number} [props.y=0] - Pattern offset Y
 * @param {number} [props.cx=1] - Dot center X position
 * @param {number} [props.cy=1] - Dot center Y position
 * @param {number} [props.cr=1] - Dot radius
 * @param {string} [props.className] - Additional CSS classes
 */
export function DotPattern({
  width = 20,
  height = 20,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}) {
  const id = `dot-pattern-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "c__dot-pattern pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
