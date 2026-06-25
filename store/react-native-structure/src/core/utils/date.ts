import { i18Number } from "./i18";

/**
 * Returns date formatted as "DD-MM-YYYY".
 * - No argument → uses current date
 * - With ISO/UTC date string → formats that date
 */
export function getFormattedDate(dateString?: string): string {
  const date = dateString ? new Date(dateString) : new Date();

  if (isNaN(date.getTime())) {
    return "";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${i18Number(day)}-${i18Number(month)}-${i18Number(year)}`;
}
