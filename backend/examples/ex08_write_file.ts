/**
 * File: ex08_write_file.ts
 *
 * Description: Demonstrates how to write text content to a file using Deno.
 * Requires the --allow-write permission when running.
 */

// Write a message to a text file
const writeFile = async (filename: string, message: string) => {
	// Use Deno.writeTextFile to write the file
	await Deno.writeTextFile(filename, message);
};

// Define the content to be written
const message = "🚀 Hello, file system! This file was created by Deno.";

// Define the output file name
const filename = "storage/text_file.txt";

// Write the message to the file
writeFile(filename, message);
console.log(`✅ File '${filename}' has been written successfully.`);
