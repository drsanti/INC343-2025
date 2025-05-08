/**
 * File: ex13_fetch_api.ts
 *
 * Description: Demonstrates how to fetch data from a public API using Deno's built-in fetch function.
 * Shows how to handle JSON responses and basic error checking.
 */

// Async function to fetch a random joke from an API
const fetchJoke = async () => {
	const url = "https://api.chucknorris.io/jokes/random";

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		console.log("🤣 Random Joke:", data.value);
	} catch (error) {
		console.error("❌ Failed to fetch joke:", (error as Error).message);
	}
};

// Call the function
fetchJoke();
