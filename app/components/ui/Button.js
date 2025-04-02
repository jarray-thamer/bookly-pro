import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-black text-white transition-all duration-300 hover:scale-115 before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:to-white before:opacity-0 before:transition-opacity hover:before:opacity-20 before:duration-500 overflow-visible",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 px-8 py-3", // Updated to match CTA padding
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = forwardRef(
  ({ className, variant, size, children, ...props }, ref) => {
    // Special rendering for CTA variant with text animation
    if (variant === "cta") {
      return (
        <button
          className={cn(
            buttonVariants({ variant, size, className }),
            "px-8 py-2"
          )}
          ref={ref}
          {...props}
        >
          <div className="relative inline-block ">
            {/* Increased height to accommodate both texts */}
            <span className="block transition-all duration-300 ease-in-out transform opacity-100 group-hover:-translate-y-8 group-hover:opacity-0">
              {children}
            </span>
            <span className="absolute left-0 right-0 bottom-0 ease-in-out transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              {children}
            </span>
          </div>
        </button>
      );
    }

    // Standard rendering for all other variants
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
