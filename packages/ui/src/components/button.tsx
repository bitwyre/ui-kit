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
        "border border-bw-navy-600 bg-bw-navy-950 text-bw-cyan-blue-50 hover:border-bw-navy-500",
      ghost: "text-bw-cyan-blue-50 hover:bg-bw-navy-500",
      link: "text-bw-cyan-blue-50 underline hover:no-underline",
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

export interface ButtonProps
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
 * @param asChild - Props for wrap a child for an element.
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
      textButtonLoading,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
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
                strokeWidth="1"></circle>
              {/* <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> */}
              <path
                d="M15.1263 11.6354C15.9536 10.0136 16.203 8.15804 15.8333 6.37533C15.4635 4.59261 14.4968 2.98934 13.0927 1.83034C11.6886 0.671338 9.93112 0.0259453 8.11064 0.00076514C6.29016 -0.024415 4.51554 0.572124 3.07992 1.69185C1.6443 2.81157 0.633553 4.38749 0.214642 6.1593C-0.20427 7.9311 -0.00628785 9.7928 0.775885 11.4369C1.55806 13.081 2.87763 14.4091 4.51663 15.2018C6.15564 15.9946 8.01602 16.2045 9.79049 15.7971L9.5142 14.5939C8.01355 14.9385 6.44025 14.7609 5.05417 14.0905C3.66808 13.4201 2.55214 12.2969 1.89067 10.9065C1.22919 9.51615 1.06176 7.94174 1.41603 6.44334C1.7703 4.94495 2.62507 3.61222 3.83916 2.66528C5.05324 1.71835 6.55401 1.21386 8.09357 1.23516C9.63313 1.25645 11.1194 1.80225 12.3068 2.7824C13.4942 3.76255 14.3118 5.11842 14.6245 6.62604C14.9372 8.13365 14.7263 9.70284 14.0266 11.0744L15.1263 11.6354Z"
                stroke="currentColor"
                stroke-width="2"
                mask="url(#path-1-inside-1_32_2100)"
              />
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
