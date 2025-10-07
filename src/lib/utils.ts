import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for class name concatenation
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
