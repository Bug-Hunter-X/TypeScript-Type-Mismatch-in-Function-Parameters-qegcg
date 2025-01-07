function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

// Uncommon error: Type mismatch in function parameters
// For example, if the function add expects two numbers, but we pass in a string and a number, it will throw a runtime error.

console.log(add(5, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.