type ClassDict = Record<string, boolean | null | undefined>;
type ClassValue = string | false | null | undefined | ClassDict;

// Joins class names, dropping falsy values — the single place every
// component builds its `className` string from. Accepts plain strings and,
// for conditional classes, an object of { className: condition }, e.g.
// clx("px-4", { "px-10": isActive }).
export function clx(...classes: ClassValue[]): string {
  const result: string[] = [];

  for (const cls of classes) {
    if (!cls) continue;

    if (typeof cls === "string") {
      result.push(cls);
      continue;
    }

    for (const key in cls) {
      if (cls[key]) result.push(key);
    }
  }

  return result.join(" ");
}
