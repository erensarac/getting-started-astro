import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export function getPreviousURLSegments(referrer: string): string[] | null {
  if (referrer) {
    return new URL(referrer).pathname.split("/").filter(Boolean)
  }

  return null;
}