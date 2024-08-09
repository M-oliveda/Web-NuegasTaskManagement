export function timeLeft(futureDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const present = Date.now();
  const future = new Date(...futureDate.split("/"));

  return Math.round(Math.abs((future - present) / oneDay));
}
