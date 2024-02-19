import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {ChevronDown} from "lucide-react";
import React from "react";
import {cn} from "../lib/utils";

/**
 * @returns Element UI for Accordion.
 * @param {AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps} - Props for Accordion
 * @example Element UI for Accordion.
 * <Accordion>
 *  <AccordionItem>
 *    <AccordionTrigger></AccordionTrigger>
 *    <AccordionContent></AccordionContent>
 *  </AccordionItem>
 *  <AccordionItem>
 *    <AccordionTrigger></AccordionTrigger>
 *    <AccordionContent></AccordionContent>
 *  </AccordionItem>
 * </Accordion>

 */
const Accordion = AccordionPrimitive.Root;

/**
 * @returns Element UI for Accordion Item
 * @param {AccordionPrimitive.AccordionItemProps} - Props for Accordion Item
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({className, ...props}, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

/**
 * @returns Element UI for Accordion Trigger
 * @param {AccordionPrimitive.AccordionTriggerProps} - Props for Accordion Trigger
 */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "overflow-hidden flex flex-1 items-center justify-between py-4 font-medium transition-all outline-none no-underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}>
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/**
 * @returns Element UI for Accordion Content
 * @param {AccordionPrimitive.AccordionContentProps} - Props for Accordion Content
 */

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    )}
    {...props}>
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {Accordion, AccordionContent, AccordionItem, AccordionTrigger};
