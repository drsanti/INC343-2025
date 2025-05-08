/**
 * File: ex15_write_json.ts
 *
 * Description:
 * Demonstrates how to create and write JSON data to a file using Deno.
 * Requires the --allow-write permission to save the file.
 *
 * 🔧 How to Run:
 * -------------------------------
 * deno run --allow-write ex15_write_json.ts
 */

const data = {
	name: "Deno Learner",
	age: 25,
	isActive: true,
	skills: ["TypeScript", "Deno", "Async"],
};

const jsonString = JSON.stringify(data, null, 2);

const filename = "storage/json_file.json";

await Deno.writeTextFile(filename, jsonString);

console.log(`✅ JSON data has been written to '${filename}'`);
