/**
 * File: ex17_http_server_json.ts
 *
 * Description:
 * Creates a simple HTTP server that responds with data read from a JSON file.
 * Demonstrates integration of file reading and networking in Deno.
 * Requires both --allow-read and --allow-net permissions.
 *
 * 🔧 How to Run:
 * -------------------------------
 * deno run --allow-read --allow-net ex17_http_server_json.ts
 */

// Mark as module for top-level await
export {};

import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 8000;
const FILE_PATH = "storage/json_file.json";

const handler = async (_req: Request): Promise<Response> => {
	try {
		const jsonString = await Deno.readTextFile(FILE_PATH);
		const data = JSON.parse(jsonString);

		return new Response(JSON.stringify(data, null, 2), {
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Failed to load data", details: error.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};

console.log(`🚀 HTTP server is running at http://localhost:${PORT}`);
await serve(handler, { port: PORT });
