"use client";

import * as React from "react";

export interface ShowIfProps {
  condition: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * The ShowIf component renders its children if a given condition is true, otherwise it renders a
 * fallback component.
 * @param {ShowIfProps}  - - `fallback`: This is a default value that will be returned if the
 * `condition` prop is `false`.
 * @returns If the condition is true, the children of the ShowIf component are being returned.
 * Otherwise, the fallback value is being returned.
 */
const ShowIf = ({fallback = null, ...props}: ShowIfProps) =>
  props.condition ? props.children : fallback;

export interface ForProps<TData> {
  each: Array<TData>;
  children: (eachItem: TData, i: number) => JSX.Element;
}

/**
 * The `For` component is a TypeScript React component that iterates over an array of data and renders
 * child components for each item in the array.
 * @param props - The `props` parameter is an object that contains the properties passed to the `For`
 * component.
 * @returns The For component is returning the result of mapping over the `props.each` array and
 * calling the `props.children` function for each item in the array. The result is an array of React
 * elements.
 */
const For = <TData,>(props: ForProps<TData>) => {
  return React.Children.toArray(
    props.each.map((item, itemIdx) => props.children(item, itemIdx)),
  );
};

export type BoxProps<TElement extends React.ElementType = "div"> = {
  as?: TElement;
  children?: React.ReactNode;
  defaultClassName?: string;
} & React.HTMLProps<TElement>;

/**
 * Box Component
 *
 * A versatile and flexible container component that can be rendered as any HTML element.
 *
 * * @example
 * // Using Box component with default "div" element:
 * <Box defaultClassName="my-box" className="custom-box">Content</Box>
 * // Using Box component with "section" element:
 * <Box defaultClassName="my-box" className="custom-box" as="section">Content</Box>
 */
const Box = React.forwardRef(
  <TElement extends React.ElementType = "div">(
    {as, defaultClassName = "w-full", className, ...props}: BoxProps<TElement>,
    ref: React.Ref<React.ElementRef<TElement>>,
  ) => {
    const combinedClassName = `${defaultClassName || ""} ${className ?? ""}`.trim();

    return React.createElement(as ?? "div", {
      ...props,
      ref,
      className: combinedClassName,
    });
  },
);

Box.displayName = "Box";

export {Box, For, ShowIf};
