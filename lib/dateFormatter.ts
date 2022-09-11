export function dateFormatter(date: Date | string) {
  if (typeof date === "string") {
    return date;
  }
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}
