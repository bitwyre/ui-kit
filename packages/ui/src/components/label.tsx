"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "../lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

/**
 * This component used for displaying text labels.
 *
 * @remarks This component is implemented using React.forwardRef to allow
 * passing refs to the underlying DOM element.
 *
 * @param className - Additional CSS class names to apply to the label.
 * @param props - Additional props to be spread onto the label component.
 * @param ref - Reference to the underlying DOM element.
 *
 * @returns A React functional component representing a label.
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({className, ...props}, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export {Label};
