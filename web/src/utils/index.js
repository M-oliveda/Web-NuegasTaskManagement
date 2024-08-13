export function timeLeft(futureDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const present = Date.now();
  const future = new Date(...futureDate.split("/"));

  return Math.round(Math.abs((future - present) / oneDay));
}

export const weekdays = ["U", "M", "T", "W", "R", "F", "S"];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
