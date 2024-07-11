// src/sortArray.ts

export function sortArray(arr: string[]): string[] {
  return arr.sort((a, b) => {
      const regex = /(\D+)(\d+)/;
      const [, prefixA, numA] = a.match(regex) || [];
      const [, prefixB, numB] = b.match(regex) || [];
      
      if (prefixA === prefixB) {
          return Number(numA) - Number(numB);
      }
      return prefixA.localeCompare(prefixB);
  });
}
