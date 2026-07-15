import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

/**
 * PRANA Button.
 * - primary  → magenta CTA (the ONLY place gradient-adjacent brand pink is used as a button fill)
 * - secondary → outline ink
 * - ghost    → text-only
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-sans font-semibold text-[15px] tracking-tight",
    "rounded-md transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "min-h-11", // 44px WCAG touch target
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-prana-magenta text-white hover:bg-[#d81a76] shadow-[0_1px_0_rgba(6,20,70,0.06)]",
        secondary:
          "border border-ink text-ink bg-transparent hover:bg-ink hover:text-paper dark:text-paper dark:border-paper dark:hover:bg-paper dark:hover:text-ink",
        ghost:
          "text-ink hover:bg-ink/5 dark:text-paper dark:hover:bg-paper/10",
      },
      size: {
        md: "h-11 px-5",
        lg: "h-12 px-6 text-base",
        sm: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "PranaButton";

export { buttonVariants };
