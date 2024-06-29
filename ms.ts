import ms from "ms";

const unitMap = {
  s: 1000,
  h: 60 * 60 * 1000,
  m: 60 * 1000,
  y: 365.25 * 24 * 60 * 60 * 1000,
  ms: 1,
} as const;
type Args = {
  time: number;
  unit?: keyof typeof unitMap;
};
export function betterMs({ time, unit = "ms" }: Args) {
  return unitMap[unit] * time;
}

console.log(betterMs({ time: -10, unit: "s" }) === ms("-10s"));
console.log(betterMs({ time: -10, unit: "h" }) === ms("-10h"));
console.log(betterMs({ time: -2.5, unit: "h" }) === ms("-2.5h"));
console.log(betterMs({ time: 1, unit: "y" }) === ms("1y"));
console.log(betterMs({ time: -200 }) === ms("-200"));
