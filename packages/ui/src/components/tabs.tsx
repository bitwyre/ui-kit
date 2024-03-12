"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import {LayoutGroup, motion} from "framer-motion";
import * as React from "react";

import {cn} from "../lib/utils";
import {For} from "./common";

const TabsSlider = (props: {id: string; sliderClassName?: string}) => (
  <motion.span
    className={cn("absolute inset-0 bg-custom-gradient", props.sliderClassName)}
    layoutId={props.id}
    transition={{
      type: "spring",
      bounce: 0.15,
      duration: 0.5,
    }}
  />
);

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({className, ...props}, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md p-1",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({className, ...props}, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative group",
      "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-[15px] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      // "data-[state=active]:bg-[#2a3138] data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({className, ...props}, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

type TabItem = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type TabProps = {
  /**
   * The value of the current active tab
   */
  activeTab: string;
  /**
   * Array of TabItems
   */
  items: Array<TabItem>;
  /**
   * when containerClassName is passed, the container of the Tabs will be rendered with the given className
   */
  containerClassName?: string;
  /**
   * when sliderClassName is passed, the container of the Tabs slider will be rendered with the given className
   */
  sliderClassName?: string;
  /**
   * when triggerClassName is passed, the trigger will be rendered with the given className
   */
  triggerClassName?: string;
  /**
   * when contentClassName is passed, the content will be rendered with the given className
   */
  contentClassName?: string;
  /**
   *  this will fired when a TabTrigger is clicked
   * @param value - The value of the tab that was clicked.
   * @returns
   */
  onChangeTab: (value: string) => void;
};

/**
 * Render a Tabs component with the given props.
 * @example
 * ```tsx
 * const items = [
 * {
 *   label: "Instituional",
 *   value: "institutional",
 *   content: <p>Institutional content</p>,
 * },
 * {
 *   label: "Retail",
 *   value: "retail",
 *   content: <p>Retail content</p>,
 * },
 * ];
 *
 * export const TabsComponent = () => {
 *  const [activeTab, setTab] = React.useState(items[0].value);
 *
 *  return (
 *    <Tabs
 *      items={items}
 *      activeTab={activeTab}
 *      onChangeTab={setTab}
 *      />
 *  );
 * };
 * ```
 */
const Tabs = (props: TabProps) => {
  const id = React.useId();

  return (
    <TabsPrimitive.Root value={props.activeTab} onValueChange={props.onChangeTab}>
      <TabsList
        className={cn(
          "inline-flex h-[unset] border border-bw-navy-500 bg-bw-navy-600",
          props.containerClassName,
        )}>
        <LayoutGroup>
          <For each={props.items}>
            {(item) => (
              <TabsTrigger value={item.value} className="px-5 py-2">
                <div className="relative z-10">{item.label}</div>
                {item.value === props.activeTab && (
                  <TabsSlider id={id} sliderClassName={props.sliderClassName} />
                )}
              </TabsTrigger>
            )}
          </For>
        </LayoutGroup>
      </TabsList>

      <For each={props.items}>
        {(item) => (
          <TabsContent className={props.contentClassName} value={item.value}>
            {item.content}
          </TabsContent>
        )}
      </For>
    </TabsPrimitive.Root>
  );
};

export {Tabs};
