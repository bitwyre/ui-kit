import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import {toast} from "sonner";

/**
 * Combines multiple class strings or arrays into a single class string.
 * @param {...ClassValue[]} inputs - The class strings or arrays to combine.
 * @returns {string} The combined class string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

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
export const notify: typeof toast = toast;
