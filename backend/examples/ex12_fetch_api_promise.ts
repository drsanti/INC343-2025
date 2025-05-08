/**
 * File: ex12_fetch_api_promise.ts
 *
 * Description: Demonstrates how to fetch data from an external API using Promises (.then/.catch).
 * This is an alternative to async/await syntax for handling asynchronous operations in Deno.
 */

const url = "https://api.chucknorris.io/jokes/random";

// Fetch a joke using .then() and .catch()
fetch(url)
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return response.json(); // Returns another Promise
	})
	.then((data) => {
		console.log("🤣 Chuck Norris Joke:", data.value);
	})
	.catch((error) => {
		console.error("❌ Fetch error:", error.message);
	});

console.log("🔄 Fetching joke...");
