import i18nNext from "../i18n/i18";
import { type TranslationKey } from "../i18n/types";

export const toBanglaNumber = (number: number | string) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number
    .toString()
    .split("")
    .map((digit) => banglaDigits[parseInt(digit)])
    .join("");
};
 

export const i18Number = (num:number | string) =>  {
  const len = i18nNext.language;
  if(!num?.toString()) {
    return ''
  }
  return num?.toString()?.split('')?.map((digit) => {
    if (len === 'bn') {
      const banglaDigits: Record<string, string> = {
        "0": "০",
        "1": "১",
        "2": "২",
        "3": "৩",
        "4": "৪",
        "5": "৫",
        "6": "৬",
        "7": "৭",
        "8": "৮",
        "9": "৯",
        ".": "."  
      }
      return banglaDigits[digit];
    } else {
      return digit;
    }
  }).join('');
}

export function t(key:TranslationKey) {
  return i18nNext.t(key)
}