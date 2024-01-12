export function checkMessage(text: string | undefined): string {
  if (typeof text === "string") {
    return text;
  }
  throw new Error("Task text is not a string");
}
