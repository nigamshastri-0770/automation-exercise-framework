
export function analyzeLogs(logs) {
  if (logs.includes("Timeout")) {
    return "Increase wait time or fix locator";
  }
  return "No clear issue detected";
}
