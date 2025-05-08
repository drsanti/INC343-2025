/**
 * File: ex10_async_await.ts
 *
 * Description: Demonstrates how to use async and await to handle asynchronous operations in Deno.
 * Uses a simulated delay to show execution order and async flow.
 */

// Simulated async task that resolves after a delay
const simulateAsyncTask = (taskName: string, delay: number): Promise<string> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`✅ Task "${taskName}" completed after ${delay}ms`);
		}, delay);
	});
};

// An async function to run tasks in sequence
const runTasks = async () => {
	console.log("🚀 Starting async tasks...");

	const result1 = await simulateAsyncTask("Load user data", 2000);
	console.log(result1);

	const result2 = await simulateAsyncTask("Fetch posts", 3500);
	console.log(result2);

	const result3 = await simulateAsyncTask("Render dashboard", 1500);
	console.log(result3);

	console.log("🎉 All tasks completed!");
};

// Call the async function
runTasks();
