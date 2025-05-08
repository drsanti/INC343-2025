/**
 * File: ex09_read_file.ts
 *
 * Description: Demonstrates how to read the content of a text file using Deno.
 * Requires the --allow-read permission when running.
 */

// Function to read and display file content
const readFile = async (filename: string) => {
	try {
		// Read the file's content
		const content = await Deno.readTextFile(filename);
		console.log("📄 File Content:\n", content);
	} catch (error) {
		console.error("❌ Error reading the file:", error.message);
	}
};

// Call the function to read the file
readFile("storage/text_file.txt");
