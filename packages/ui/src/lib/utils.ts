import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

/**
 * Combines multiple class strings or arrays into a single class string.
 * @param {...ClassValue[]} inputs - The class strings or arrays to combine.
 * @returns {string} - The combined class string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
