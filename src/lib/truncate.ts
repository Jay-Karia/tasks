const TITLE_MAX_LENGTH = 20;

export function truncate(str: string) {
  if (str.length > TITLE_MAX_LENGTH) return str.substring(0, TITLE_MAX_LENGTH) + "...";

  return str;
}
