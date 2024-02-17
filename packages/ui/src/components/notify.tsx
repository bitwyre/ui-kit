"use client";

import * as React from "react";
import {Toaster, toast} from "sonner";

/**
 *@description this function is for Displays a toast message.
 *
 *@function success as notifying success message
 *@function loading as notifying loading
 *@function warning as notifying warning message
 *@function error as notifying error message
 *@function custom as notifying custom message => returning JSX Element and accept only () => JSX.Element
 *@function message as notifying custom message too. accepting string or JSX Element;
 *@function promise as notifying promises action with message
 *@function dismis as dismis notifying
 **/
const notify: typeof toast = toast;

const NotifyToaster = (props: React.ComponentPropsWithoutRef<typeof Toaster>) => (
  <Toaster position="top-center" {...props} />
);

export {NotifyToaster, notify};
