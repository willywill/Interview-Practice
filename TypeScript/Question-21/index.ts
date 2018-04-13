// Convert array to a set, set will remove duplicates in-place, convert back to an array.
const nums: number[] = [0,0,1,1,1,2,2,3,3,4];
const toCollection = new Set<number>(nums);
Array.from(toCollection);
