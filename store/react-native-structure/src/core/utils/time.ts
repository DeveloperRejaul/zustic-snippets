/**
 * Returns a human-readable relative time string (Today, X days ago, X months ago)
 * based on the given date string.
 *
 * @param {string} createdAt - The creation date in ISO string format (e.g., "2026-02-23T10:30:00.000Z").
 * @param {string} lang - Language code. Use "en" for English or "bn" for Bangla.
 *
 * @returns {string} A formatted relative time string:
 * - "Today" / "আজ" if the date is today
 * - "X day(s) ago" / "X দিন আগে" if less than 31 days
 * - "X month(s) ago" / "X মাস আগে" if 31 days or more
 */
export const getRelativeTime = (createdAt: string, lang: string): string => {
  const createdDate = new Date(createdAt);
  const today = new Date();

  // Convert to UTC midnight
  const createdUTC = Date.UTC(
    createdDate.getUTCFullYear(),
    createdDate.getUTCMonth(),
    createdDate.getUTCDate()
  );
  const todayUTC = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate()
  );

  const diffInDays = Math.floor(
    (todayUTC - createdUTC) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays === 0) {
    return lang === "bn" ? "আজ" : "Today";
  } else if (diffInDays > 0 && diffInDays < 31) {
    return lang === "bn"
      ? `${diffInDays} দিন আগে`
      : `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  } else if (diffInDays >= 31) {
    const monthDiff =
        (today.getUTCFullYear() - createdDate.getUTCFullYear()) * 12 +
        (today.getUTCMonth() - createdDate.getUTCMonth());

    return lang === "bn"
      ? `${monthDiff} মাস আগে`
      : `${monthDiff} month${monthDiff > 1 ? "s" : ""} ago`;
  } else {
    // Future date fallback
    return lang === "bn" ? "আজ" : "Today";
  }
};


/**
 * Check whether a given date-time is within a specified time range (in milliseconds)
 * compared to another date-time.
 *
 * @param {string} dateString - ISO date string to compare (e.g. "2026-02-09T11:13:00.000Z")
 * @param {string} nowTime - ISO date string used as the reference time
 * @param {number} timeMs - Time range in milliseconds (e.g. 30 minutes = 30 * 60 * 1000)
 *
 * @returns {boolean} Returns true if the time difference is within the given range, otherwise false
 *
 * @example
 * const THIRTY_MIN_MS = 30 * 60 * 1000;
 *
 * isWithinTimeMs(
 *   '2026-02-09T11:13:00.000Z',
 *   '2026-02-09T11:25:00.000Z',
 *   THIRTY_MIN_MS
 * ); // true
 */
const normalize = (v: string) => v.includes('Z') ? v : v.replace(' ', 'T') + 'Z'

export function isWithinTimeMs(
  dateString: string = "",
  nowTime: string = "",
  timeMs: number
): boolean {

  const inputTimeMs = new Date(normalize(dateString)).getTime()
  const nowTimeMs = new Date(normalize(nowTime)).getTime()

  return Math.abs(nowTimeMs - inputTimeMs) <= timeMs
}


/**
 * Extracts formatted time (HH:MM AM/PM or 24h format) from an ISO date string.
 *
 * @param {string} dateString - ISO date string (e.g., "2026-02-23T13:49:04.000Z")
 * @param {boolean} is24Hour - Optional. If true, returns 24-hour format. Default is false (12-hour format).
 *
 * @returns {string} Formatted time string.
 * - Example (12h): "7:49 PM"
 * - Example (24h): "19:49"
 */
export const getTime = (dateString: string, is24Hour: boolean = false): string => {
  const date = new Date(normalize(dateString));

  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (is24Hour) {
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  }

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHour = hours % 12 || 12;

  return `${formattedHour}:${minutes.toString().padStart(2, "0")} ${period}`;
};