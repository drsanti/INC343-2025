/**
 * File: ex06_set_timeout.ts
 *
 * Description: Demonstrates how to use setTimeout in Deno to delay execution.
 * This is useful for scheduling actions or simulating async behavior.
 */

// A regular function to greet someone
function greet(name: string) {
	console.log(`Hello, ${name}!`);
}

// Greet after 2 seconds (2000 milliseconds)
setTimeout(() => {
	greet("Deno User");
}, 2000);

console.log("Waiting to greet User...");
