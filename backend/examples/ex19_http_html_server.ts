/**
 * File: ex19_http_web_server.ts
 *
 * Description:
 * Demonstrates how to create a basic HTTP web server with Deno
 * that serves HTML content to the browser.
 *
 * 🔧 How to Run:
 * -------------------------------
 * deno run --allow-net ex19_http_web_server.ts
 */

export {};

import { serve } from "https://deno.land/std/http/server.ts";

// HTML content
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Deno Web Server</title>
</head>
<body>
  <h1>🌐 Welcome to Deno!</h1>
  <p>This HTML was served from a Deno backend.</p>
  <p>Current time: ${new Date().toLocaleTimeString()}</p>
</body>
</html>
`;

// HTTP request handler
const handler = (_req: Request): Response => {
	return new Response(html, {
		headers: { "Content-Type": "text/html; charset=UTF-8" },
	});
};

// Start the server
const PORT = 8080;
console.log(`🌍 Web server is running at http://localhost:${PORT}`);
await serve(handler, { port: PORT });
