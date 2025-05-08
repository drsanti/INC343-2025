/**
 * File: ex20_http_web_server.ts
 *
 * Description:
 * A simple static web server built with Deno. It serves HTML, CSS, and JS files
 * from the local "storage/" directory using the standard HTTP module.
 *
 * 📁 File Structure:
 * -------------------------------
 * - ex20_http_web_server.ts
 * - storage/
 *   ├── index.html       (served at http://localhost:8080/)
 *   ├── style.css        (served at http://localhost:8080/style.css)
 *   └── script.js        (served at http://localhost:8080/script.js)
 *
 * 🔧 How to Run:
 * -------------------------------
 * deno run --allow-net --allow-read ex20_http_web_server.ts
 *
 * 🌐 Then open: http://localhost:8080
 */

export {};

import { serve } from "https://deno.land/std/http/server.ts";
import { extname, join } from "https://deno.land/std/path/mod.ts";

// Directory where static files are stored
const STATIC_DIR = "storage";

// Basic content-type map
const contentTypes: Record<string, string> = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
};

// Serve static file or 404
const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  const path = url.pathname === "/" ? "/index.html" : url.pathname;

  const filePath = join(STATIC_DIR, path);
  const fileExt = extname(filePath);
  const contentType = contentTypes[fileExt] || "application/octet-stream";

  try {
    const content = await Deno.readTextFile(filePath);
    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch {
    return new Response("404 - File Not Found", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

// Start server
const PORT = 8080;
console.log(`📦 Serving static files at http://localhost:${PORT}`);
await serve(handler, { port: P
