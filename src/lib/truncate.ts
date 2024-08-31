export function truncate(str: string, max: number) {
  if (str.length > max) return str.substring(0, max) + "...";

  return str;
}
