/**
 * File: ex16_read_json.ts
 *
 * Description:
 * Demonstrates how to read and parse a JSON file using Deno.
 * Requires the --allow-read permission to access the file system.
 *
 * 🔧 How to Run:
 * -------------------------------
 * deno run --allow-read ex16_read_json.ts
 */

// Mark as a module so we can use top-level await
export {};

const filename = "storage/json_file.json";

try {
	// Read the file content as text
	const jsonString = await Deno.readTextFile(filename);

	// Parse the JSON string into a JavaScript object
	const data = JSON.parse(jsonString);

	console.log("📄 JSON Data Loaded:");
	console.log("👤 Name:", data.name);
	console.log("🎂 Age:", data.age);
	console.log("✅ Active:", data.isActive);
	console.log("🛠️ Skills:", data.skills.join(", "));
} catch (error) {
	console.error("❌ Error reading or parsing the file:", error.message);
}
