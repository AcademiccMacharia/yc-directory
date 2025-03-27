import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | undefined) {
  if (!date) return "Invalid Date"; // ✅ Handle undefined/null cases
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return "Invalid Date"; // ✅ Handle bad dates
  return parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function parseServerActionRespose<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

