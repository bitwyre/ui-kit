import * as React from "react";
import {Drawer as Vaul} from "vaul";
import {cn} from "../lib/utils";

export interface DrawerOverlayProps
  extends React.ComponentPropsWithoutRef<typeof Vaul.Overlay> {}
export interface DrawerOverlayElement extends React.ElementRef<typeof Vaul.Overlay> {}

export interface DrawerContentProps extends React.ComponentProps<typeof Vaul.Content> {}
export interface DrawerContentElement extends React.ElementRef<typeof Vaul.Content> {}

export interface DrawerTitleProps extends React.ComponentProps<typeof Vaul.Title> {}
export interface DrawerTitleElement extends React.ElementRef<typeof Vaul.Title> {}

export interface DrawerDescriptionProps
  extends React.ComponentProps<typeof Vaul.Description> {}
export interface DrawerDescriptionElement
  extends React.ElementRef<typeof Vaul.Description> {}

/**
 * This is Drawer Root, every drawer should be wrapped with this component
 */
const Drawer = (props: React.ComponentPropsWithoutRef<typeof Vaul.Root>) => (
  <Vaul.Root {...props} />
);
Drawer.displayName = "Drawer";

/**
 * Optional Trigger button without using `open/closed` state
 */
const DrawerTrigger = (props: React.ComponentPropsWithoutRef<typeof Vaul.Trigger>) => (
  <Vaul.Trigger {...props} />
);
DrawerTrigger.displayName = "DrawerTigger";

const DrawerPortal = Vaul.Portal;
DrawerPortal.displayName = "DrawerPortal";

const DrawerOverlay = React.forwardRef<DrawerOverlayElement, DrawerOverlayProps>(
  ({className, ...props}, ref) => (
    <Vaul.Overlay
      ref={ref}
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      {...props}
    />
  ),
);
DrawerOverlay.displayName = Vaul.Overlay.displayName;

/**
 * Drawer content should be wrapped inside this component
 *
 * @example```tsx
 * <Drawer>
 *  <DrawerContent>
 *   <DrawerHeader />
 *   <p>Hello John</p>
 *  <DrawerContent />
 * </Drawer>
 * ```
 */
const DrawerContent = React.forwardRef<DrawerContentElement, DrawerContentProps>(
  ({className, children, ...props}, ref) => (
    <DrawerPortal>
      <DrawerOverlay />
      <Vaul.Content
        ref={ref}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50",
          "mt-24 flex h-auto flex-col rounded-t-[10px] bg-bw-navy-800 text-bw-navy-50",
          className,
        )}
        {...props}>
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-bw-navy-600" />
        {children}
      </Vaul.Content>
    </DrawerPortal>
  ),
);
DrawerContent.displayName = Vaul.Content.displayName;

/**
 *
 * @param param0 HTMLDiv Attributes
 * @returns Drawer Footer, should be placed inside `<DrawerContent />`
 */
const DrawerFooter = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

/**
 *
 * @param param0 HTMLDiv Attributes
 * @returns Drawer Header, should be placed inside `<DrawerContent />`
 */
const DrawerHeader = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

/**
 * DrawerTitle represent `<h3` element, prefered placement is inside `<DrawerHeader />`
 * @returns DrawerTitle
 */
const DrawerTitle = React.forwardRef<DrawerTitleElement, DrawerTitleProps>(
  ({className, ...props}, ref) => (
    <Vaul.Title
      ref={ref}
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
DrawerTitle.displayName = Vaul.Title.displayName;

/**
 * DrawerDescription represent `<p>` element, prefered placemenet is inside `<DrawerHeader />` after `<DrawerTitle />`
 */
const DrawerDescription = React.forwardRef<
  DrawerDescriptionElement,
  DrawerDescriptionProps
>(({className, ...props}, ref) => (
  <Vaul.Description
    ref={ref}
    className={cn("text-sm text-bw-navy-300", className)}
    {...props}
  />
));
DrawerDescription.displayName = Vaul.Description.displayName;

export {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
};
