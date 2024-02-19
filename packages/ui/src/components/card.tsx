"use client";

import {VariantProps, cva} from "class-variance-authority";
import * as React from "react";
import {cn} from "../lib/utils";

const cardVariants = cva("rounded-lg", {
  variants: {
    variant: {
      default: "border border-card bg-card text-card-foreground",
      gradient:
        "border-card-gradient-border from-card-gradient-start to-card-gradient-stop text-card-gradient-foreground border bg-gradient-to-r",
      "default-gradient":
        "bg-gradient-to-br from-card to-[hsla(216,100%,51%,0.1)] text-card-foreground",
    },
  },
  defaultVariants: {variant: "default"},
});

interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

/**
 * A simple card component.
 * @param props - Props for the Card component.
 * @param ref - Forwarded ref for the Card component.
 * @returns A Card component.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({className, variant, ...props}, ref) => (
    <div ref={ref} className={cn(cardVariants({variant, className}))} {...props} />
  ),
);
Card.displayName = "Card";

/**
 * A header component for the Card.
 * @param props - Props for the CardHeader component.
 * @param ref - Forwarded ref for the CardHeader component.
 * @returns A CardHeader component.
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * A title component for the Card.
 * @param props - Props for the CardTitle component.
 * @param ref - Forwarded ref for the CardTitle component.
 * @returns A CardTitle component.
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({className, ...props}, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}>
    {props.children}
  </h3>
));
CardTitle.displayName = "CardTitle";

/**
 * A description component for the Card.
 * @param props - Props for the CardDescription component.
 * @param ref - Forwarded ref for the CardDescription component.
 * @returns A CardDescription component.
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({className, ...props}, ref) => (
  <p
    ref={ref}
    className={cn("text-primary-foreground text-sm", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/**
 * A content component for the Card.
 * @param props - Props for the CardContent component.
 * @param ref - Forwarded ref for the CardContent component.
 * @returns A CardContent component.
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div ref={ref} className={cn("p-4 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * A footer component for the Card.
 * @param props - Props for the CardFooter component.
 * @param ref - Forwarded ref for the CardFooter component.
 * @returns A CardFooter component.
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2.5 p-4 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle};
