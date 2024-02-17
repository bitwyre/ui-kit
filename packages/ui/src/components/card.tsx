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

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({className, variant, ...props}, ref) => (
    <div ref={ref} className={cn(cardVariants({variant, className}))} {...props} />
  ),
);
Card.displayName = "Card";

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

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div ref={ref} className={cn("p-4 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

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
