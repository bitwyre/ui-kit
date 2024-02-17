"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

import {cn} from "../lib/utils";

/**
 * @description Use this component to render Popover, along with it's descendant children which is `PopoverTrigger`**(optional)** and `PopoverContent`**(required)**
 * @description For uncontrolled state, make sure to use `<PopoverTrigger` inside this component to control `open/closed` state
 * @example
 * ```tsx
 * <Popover>
 *  <PopoverTrigger>Show Popover</Popover>
 *  <PopoverContent>
 *    <p>This is the popover content</p>
 *  </PopoverContent>
 * </Popover>
 * ```
 * @description For controlled state, you don't have to render a `PopoverTrigger`, but make sure to pass a boolean `open` props to track whether the `Popover` is currently opened or closed
 * @description Also don't forgot to pass `onOpenChange` to update the `open/closed` state of the `Popover`
 * @example
 * ```tsx
 * const PopoverDemo = () => {
 *  const [open, setOpen] = useState(false)
 *  const onOpenChange = (nextValue?: boolean) => setOpen(prev => nextValue ?? !prev)
 *
 *  return (
 *  <Popover open={open} onOpenChange={onOpenChange}>
 *    <PopoverContent>
 *      <p>This is the popover content</p>
 *    </PopoverContent>
 *  </Popover>
 *  )
 * }
 * ```
 * @return `Popover` Component
 */
const Popover = PopoverPrimitive.Root;

/**
 * @description Optional Component to use for uncontrolled `Popover` component, when used, you don't have to pass `open/closed` state to the `Popover`
 */
const PopoverTrigger = PopoverPrimitive.Trigger;

/**
 * @description Render this inside `Popover`. When open, it will show the children props as the `Popover` content
 * @props `align` by default, the align of `Popover` content will be `"center"`, available props: `"center"` | `"start"` | `"end"`
 * @props `sideOffset` how many offset (in pixels) the `PopoverContent` will be rendered, by default `4px`
 */
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({className, align = "center", sideOffset = 4, ...props}, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export {Popover, PopoverContent, PopoverTrigger};
