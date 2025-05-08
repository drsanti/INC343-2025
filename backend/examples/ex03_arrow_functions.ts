/**
 * File: ex03_arrow_function.ts
 *
 * Description: Demonstrates how to define and use arrow functions in Deno.
 * Arrow functions provide a concise syntax for writing functions in TypeScript.
 */

// Regular function
function greet(name: string): string {
	return `Hello, ${name}!`;
}

// Arrow function equivalent
const greetArrow = (name: string): string => `Hi, ${name}!`;

// Another example with more logic
const isEven = (num: number): boolean => {
	return num % 2 === 0;
};

// Use the functions
console.log(greet("Alice"));
console.log(greetArrow("Bob"));
console.log("Is 4 even?", isEven(4));
console.log("Is 7 even?", isEven(7));
