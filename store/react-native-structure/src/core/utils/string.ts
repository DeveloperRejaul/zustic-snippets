export const htmlToStr = (html: string): string => {
  if (!html) return "";

  let text = html;

  // Replace <br> and <p> with newlines
  text = text.replace(/<\/?br\s*\/?>/gi, "\n");
  text = text.replace(/<\/?p\s*?>/gi, "\n");

  // Replace <li> with "- " and add newline after </li>
  text = text.replace(/<li\s*?>/gi, "- ");
  text = text.replace(/<\/li>/gi, "\n");

  // Remove <ul> / </ul>
  text = text.replace(/<\/?ul\s*?>/gi, "\n");

  // Remove <a> tags but keep the text
  text = text.replace(/<a [^>]*>(.*?)<\/a>/gi, "$1");

  // Remove ALL other HTML tags
  text = text.replace(/<[^>]+>/g, "");

  // Decode basic HTML entities
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

  // Cleanup spaces and newlines
  return text
    .replace(/\s{2,}/g, " ")      // collapse multiple spaces
    .replace(/\n{2,}/g, "\n")     // collapse multiple line breaks
    .trim();
};


export  function convertTextToHtmlList(text:string) {
  if (!text || typeof text !== "string")
    return "<p>No content available.</p>";

  const lines = text.split(/\r?\n/).filter((line) => line.trim() !== "");
  const listItems = lines
    .map((line) => {
      // Remove leading Bangla or English numbers and dot
      const cleaned = line.replace(/^\s*[\d0-9]+\s*[\.।]\s*/, "");
      return `<li>${cleaned.trim()}</li>`;
    })
    .join("");

  return `${listItems}`;
}

export const isHTML = (str:string) => {
  const htmlRegex = /<\/?[a-z][\s\S]*>/i;
  return htmlRegex.test(str);
};


export const is100Words = (str:string) => {
  const words = str.trim().split(' ');
  return words.length >= 100;
}