"use client";

import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";
import * as React from "react";
import {cn} from "../lib/utils";

const baseClass = cn(
  "inline-flex items-center justify-center rounded-md",
  "text-sm font-medium leading-6 ring-0 transition-colors outline-none",
  "disabled:pointer-events-none disabled:opacity-50",
);

const buttonVariants = cva(baseClass, {
  variants: {
    variant: {
      default: "text-black",
      primary:
        "bg-bw-primary-blue-600 text-bw-cyan-blue-50 hover:bg-bw-primary-blue-700",
      secondary: "bg-bw-slate-50 text-bw-navy-600 hover:bg-bw-primary-blue-100",
      subtle: "bg-bw-navy-500 text-bw-cyan-blue-50 hover:bg-bw-navy-400",
      destructive: "bg-bw-red-800 text-bw-red-50 hover:bg-bw-red-900",
      outline:
        "border border-bw-navy-600 text-bw-cyan-blue-50 hover:border-bw-navy-500",
      ghost: "text-bw-cyan-blue-50 hover:bg-bw-navy-500",
      link: "text-black underline hover:no-underline",
      "gradient-blue": "bg-custom-gradient text-white",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
      icon: "h-10 w-10 p-2.5 leading-5",
      iconCircle: "h-10 w-10 rounded-full p-2.5 leading-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isButtonLoading?: boolean;
  textButtonLoading?: string;
}

/**
 * @returns Element UI for Button.
 *
 * @param {ButtonProps} props - Props for Button.
 * @param asChild - Props for make button element as slot or Element.
 * @param isButtonLoading - Props for button state on loading.
 * @param textButtonLoading - Props for display text on loading state.
 *
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isButtonLoading,
      type = "button",
      textButtonLoading,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        type={type}
        className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        {...props}>
        {isButtonLoading ? (
          <div className="flex items-center">
            <svg className="mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>

            <p>{textButtonLoading ?? "Loading..."}</p>
          </div>
        ) : (
          props.children
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export {Button};
