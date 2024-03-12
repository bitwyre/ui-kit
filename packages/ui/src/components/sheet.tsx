"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import {cva, type VariantProps} from "class-variance-authority";
import {X} from "lucide-react";
import * as React from "react";
import {cn} from "../lib/utils";

/**
 * `Sheet` is a root component used to create a sheet in a user interface.
 * It serves as the starting point for building a sheet component, providing the necessary structure.
 * Sheets are often used to display additional content or options without navigating away from the current page.
 * Sheet can be rendered with 2 options:
 * 1. Uncontrolled
 * 2. Controlled
 *
 * When rendered as uncontrolled, You should use `<SheetTrigger />` to open the Sheet and `<SheetClose />` to close the sheet.
 * Note that `<SheetClose />` should be rendered inside the `<SheetContent />`, this way, you don't have to pass the open/closed state for the Sheet.
 * @example
 * ```tsx
 * const MySheet = () => {
 *  return (
 *    <Sheet>
 *      <SheetTrigger>Open Sheet</Sheet >
 *
 *      <SheetContent>
 *        <p>Im being rendered inside sheet component!</p>
 *        <SheetClose>Close this sheet</SheetClose>
 *      <SheetContent />
 *    </Sheet >
 *  )
 * }
 * ```
 *
 * When rendered as controlled component, you should pass `open` and `onOpenChange` props to this component
 * @example
 * ```tsx
 * const MySheet = () => {
 *  const [open, setOpen] = React.useState(false)
 *
 *  return (
 *    <Sheet open={open} onOpenChange={setOpen}>
 *      <SheetContent>
 *        <p>Hello Im being rendered inside the Sheet component!</p>
 *      <SheetContent />
 *    </Sheet>
 *  )
 * }
 * ```
 * Notice that we don't render `<SheetTrigger />` but we pass `open` and `onOpenChange` props to it
 */
const Sheet = SheetPrimitive.Root;

/**
 * SheetTrigger will represent a button to open the Sheet, however, for sheet to be able to work, this component
 * should be rendered inside `<Sheet />` component.
 * Use case example is to render uncontrolled sheet
 * @example
 * ```tsx
 * const MySheet = () => {
 *  return (
 *    <Sheet>
 *      <SheetTrigger>Open Sheet</Sheet >
 *
 *      <SheetContent>
 *        <p>Im being rendered inside sheet component!</p>
 *      <SheetContent />
 *    </Sheet >
 *  )
 * }
 * ```
 */
const SheetTrigger = SheetPrimitive.Trigger;

/**
 * SheetClose will represent a button to close the sheet, this component can be placed inside `<SheetContent />` to close the current Sheet.
 * use case example is to render uncontrolled sheet.
 * @example
 * ```tsx
 * const MySheet = () => {
 *  return (
 *    <Sheet>
 *      <SheetTrigger>Open Sheet</Sheet >
 *
 *      <SheetContent>
 *        <p>Im being rendered inside sheet component!</p>
 *        <SheetClose>Close this sheet</SheetClose>
 *      <SheetContent />
 *    </Sheet >
 *  )
 * }
 * ```
 */
const SheetClose = SheetPrimitive.Close;

const SheetPortal = ({...props}: SheetPrimitive.DialogPortalProps) => (
  <SheetPrimitive.Portal {...props} />
);
SheetPortal.displayName = SheetPrimitive.Portal.displayName;

/**
 * SheetOverlay render as backdrop element for the sheet, by default it will blur the background of the sheet, you can adjust this by passing a new css className
 */
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "xsm:w-4/5 inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm lg:w-1/2",
        right:
          "xsm:w-4/5 inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm lg:w-1/2",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

/**
 * @description renders `<SheetContent />` that will be shown. By default the sheet will come from the `right` direction. To adjust this, simply pass, `side` props to `<SheetContent />`
 *
 * @example
 * ```tsx
 * // common use case
 * const MySheet = () => {
 *  return (
 *    <Sheet>
 *      <SheetTrigger>Open sheet</SheetTrigger>
 *
 *      <SheetContent side="left">
 *        <SheetHeader>
 *          <SheetTitle>Hey, Im a Sheet</SheetTitle>
 *          <SheetDescription>Can be rendered as important information when needed</SheetDescription>
 *        </SheetHeader>
 *        <p>Im being told to show from the left side</p>
 *
 *        <SheetFooter>
 *          <SheetClose>Close this sheet</SheetClose>
 *        </SheetFooter>
 *      </SheetContent>
 *    </Sheet>
 *  )
 * }
 * ```
 */
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({side = "right", className, children, ...props}, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({side}), className)}
      {...props}>
      {children}
      <SheetPrimitive.Close className="absolute right-6 top-[30px] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 disabled:pointer-events-none data-[state=open]:bg-background">
        <X className="h-6 w-6" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

/**
 * SheetHeader will render as div component, common use case is to wrap `<SheetTitle />` and `<SheetDescription />` inside this component
 * @param param optional `div` props
 * @returns `<SheetHeader />` wrapper
 */
const SheetHeader = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

/**
 * SheetFooter will render as div component, common use case is to wrap `<SheetClose />` inside this component, by default render at the bottom of the sheet if placed inside `<SheetContent />`
 * @param param optional `div` props
 * @returns `<SheetFooter />` wrapper
 */
const SheetFooter = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

/**
 * SheetTitle will render as div component, common use case is to wrap `<SheetTitle />` inside this component
 */
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({className, ...props}, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

/**
 * SheetDescription will render as div component, common use case is to wrap `<SheetDescription />` inside this component
 */
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({className, ...props}, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
};
