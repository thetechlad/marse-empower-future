import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light shadow-luxury hover:shadow-elevated font-medium",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-luxury hover:shadow-elevated",
        outline:
          "border border-primary bg-transparent hover:bg-primary hover:text-primary-foreground shadow-luxury hover:shadow-elevated",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-luxury hover:shadow-elevated",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline font-normal normal-case",
        luxury: "bg-primary text-primary-foreground hover:bg-primary-light shadow-luxury hover:shadow-premium transform hover:-translate-y-1 font-medium border border-primary",
        gold: "bg-gradient-gold text-accent-foreground hover:shadow-premium transform hover:-translate-y-1 font-medium border border-accent",
        minimal: "bg-transparent text-foreground border border-border hover:border-primary hover:text-primary shadow-luxury hover:shadow-elevated",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 rounded-sm px-6 text-xs",
        lg: "h-14 rounded-sm px-12 text-base",
        xl: "h-16 rounded-sm px-16 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
