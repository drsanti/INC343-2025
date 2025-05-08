/**
 * File: ex10_promise.ts
 *
 * Description: Demonstrates how to work with Promises in Deno.
 * Shows both .then/.catch chaining and async/await syntax.
 */

// A function that returns a Promise that resolves after a delay
const delayedHello = (name: string, delay: number): Promise<string> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`👋 Hello, ${name}!`);
		}, delay);
	});
};

// Using .then() and .catch()
delayedHello("Deno User", 2000)
	.then((message) => {
		console.log("Using .then():", message);
	})
	.catch((error) => {
		console.error("Error:", error);
	});

// Using async/await
const greetTypeScript = async () => {
	try {
		const message = await delayedHello("TypeScript User", 4000);
		console.log("Using async/await:", message);
	} catch (error) {
		console.error("Error:", error);
	}
};

greetTypeScript();
