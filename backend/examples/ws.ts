// Import only the HTTP server module from Deno standard library
import { serve } from "https://deno.land/std@0.186.0/http/server.ts";

// Start HTTP server
console.log("WebSocket server is running on ws://localhost:8080");
serve(
	(req: Request) => {
		const { socket, response } = Deno.upgradeWebSocket(req);

		socket.onopen = () => console.log("WebSocket connection opened.");
		socket.onmessage = (e) => {
			const message = e.data;
			console.log("Received:", message);
			socket.send(`Echo: ${message}`);
		};
		socket.onclose = () => console.log("WebSocket connection closed.");
		socket.onerror = (e) => console.error("WebSocket error:", e);

		return response;
	},
	{ port: 8080 }
);
