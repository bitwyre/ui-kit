import * as React from "react";

import {cn} from "../lib/utils";

/**
 * This code defines a `Table` component using `React.forwardRef` to forward the ref to the underlying table element. It also spreads any additional props onto the table element and applies a className while encapsulating it in a div for styling purposes.
 */
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({className, ...props}, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

/**
 * This code snippet defines a `TableHeader` component using `React.forwardRef` to forward the ref
 * to the `thead` element. It accepts standard HTML attributes and a className
 * and applies a border-b style to the `thead` element.
 */
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

/**
 * This code snippet defines a `TableBody` component using the `forwardRef` function from React.
 * It accepts HTML attributes, spreads the remaining props, and forwards a ref to the `tbody` element.
 */
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

/**
 * This code snippet defines a `TableFooter` component using `React.forwardRef`. It accepts className
 * and other HTML attributes as props, and forwards a ref to the `tfoot` element.
 */
const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <tfoot ref={ref} className={cn("font-medium", className)} {...props} />
));
TableFooter.displayName = "TableFooter";

/**
 * This code defines a `TableRow` component using `React.forwardRef` to forward refs to the `tr` element.
 * It accepts props, spreads them on the `tr` element, and applies a class using the cn function.
 */
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({className, ...props}, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

/**
 * This code snippet defines a `TableHead` component in React using `forwardRef`.
 * It accepts props for the `th` element and forwards a ref to it.
 * The component applies a class and spreads the remaining props onto the `th` element.
 */
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

/**
 * This code defines a `TableCell` component using React's `forwardRef` to forward the ref
 * to the underlying `td` element. It accepts className and spreads the rest of the props
 * to the `td` element.
 */
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

/**
 * This code defines a `TableCaption` component using `React.forwardRef` to forward a ref to
 * the `caption` element. It accepts className and other HTML attributes as props,
 * and applies the provided className along with additional classes.
 */
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({className, ...props}, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
