function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Error: Both inputs must be numbers");
    return 0; // Or throw an error
  }
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

console.log(addSafe(5, "3")); // Output: Error: Both inputs must be numbers, 0
console.log(addSafe(5, 3)); //Output: 8