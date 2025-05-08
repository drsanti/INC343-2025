/**
 * File: ex14_env.ts
 *
 * Description:
 * Demonstrates how to access environment variables using Deno.env.
 * Requires the --allow-env permission to read from the environment.
 *
 * 🔧 How to Run:
 * -------------------------------
 * On Linux/macOS:
 *   USERNAME=deno_user API_KEY=123456 deno run --allow-env ex14_env.ts
 *
 * On Windows CMD:
 *   set USERNAME=deno_user
 *   set API_KEY=123456
 *   deno run --allow-env ex14_env.ts
 *
 * On Windows PowerShell:
 *   $env:USERNAME="deno_user"
 *   $env:API_KEY="123456"
 *   deno run --allow-env ex14_env.ts
 */

// Access environment variables
const username = Deno.env.get("USERNAME");
const apiKey = Deno.env.get("API_KEY");

if (username && apiKey) {
	console.log(`👤 Hello, ${username}!`);
	console.log(`🔑 Your API key is: ${apiKey}`);
} else {
	console.log("⚠️ USERNAME or API_KEY not found in environment variables.");
}
