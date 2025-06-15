import { cn } from "@/lib/utils";

/**
 * GridPattern component that creates an efficient SVG grid pattern
 * @param {Object} props - Component props
 * @param {number} [props.width=20] - Grid cell width (smaller default)
 * @param {number} [props.height=20] - Grid cell height (smaller default)
 * @param {number} [props.x=0] - Pattern offset X
 * @param {number} [props.y=0] - Pattern offset Y
 * @param {number} [props.strokeWidth=1] - Grid line width
 * @param {string} [props.className] - Additional CSS classes
 */
export function GridPattern({
  width = 20,
  height = 20,
  x = 0,
  y = 0,
  strokeWidth = 1,
  className,
  ...props
}) {
  const id = `grid-pattern-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "c__grid-pattern pointer-events-none absolute inset-0 h-full w-full stroke-gray-300/30",
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
          x={x}
          y={y}
        >
          <path
            d={`M.5,${height}V.5H${width}`}
            fill="none"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
