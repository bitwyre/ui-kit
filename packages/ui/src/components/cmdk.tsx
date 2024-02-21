"use client";

import {type DialogProps} from "@radix-ui/react-dialog";
import {Command as CommandPrimitive} from "cmdk";
import * as React from "react";

import {Search} from "lucide-react";
import {cn} from "../lib/utils";
import {Dialog, DialogContent} from "./dialog";

/**
 * React component for rendering a Command.
 * @param {object} props - The component props.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive>} props - Props to be passed to the underlying CommandPrimitive component.
 * @returns {JSX.Element} Command component.
 */

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({className, ...props}, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

/**
 * React component for rendering a Command dialog.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the Command dialog.
 * @param {CommandDialogProps} props - Props to be passed to the underlying Dialog component.
 * @returns {JSX.Element} CommandDialog component.
 */
const CommandDialog = ({children, ...props}: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

/**
 * React component for rendering a Command input.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.icon - The icon element for the input.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>} props - Props to be passed to the underlying CommandPrimitive Input component.
 * @returns {JSX.Element} CommandInput component.
 */

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {icon?: JSX.Element}
>(({className, icon, ...props}, ref) => (
  <div className="flex gap-x-3 items-center border-b px-3" cmdk-input-wrapper="">
    {icon ?? <Search size={18} />}
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

/**
 * React component for rendering a Command list.
 * @param {object} props - The component props.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>} props - Props to be passed to the underlying CommandPrimitive List component.
 * @returns {JSX.Element} CommandList component.
 */

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({className, ...props}, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

/**
 * React component for rendering an empty Command.
 * @param {object} props - The component props.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>} props - Props to be passed to the underlying CommandPrimitive Empty component.
 * @returns {JSX.Element} CommandEmpty component.
 */

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

/**
 * React component for rendering a Command group.
 * @param {object} props - The component props.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>} props - Props to be passed to the underlying CommandPrimitive Group component.
 * @returns {JSX.Element} CommandGroup component.
 */

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

/**
 * React component for rendering a Command separator.
 * @param {object} props - The component props.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>} props - Props to be passed to the underlying CommandPrimitive Separator component.
 * @returns {JSX.Element} CommandSeparator component.
 */

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

/**
 * React component for rendering a Command item.
 * @param {object} props - The component props.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>} props - Props to be passed to the underlying CommandPrimitive Item component.
 * @returns {JSX.Element} CommandItem component.
 */

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

/**
 * React component for rendering a Command shortcut.
 * @param {object} props - The component props.
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - Props to be passed to the underlying span element.
 * @returns {JSX.Element} CommandShortcut component.
 */
const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
