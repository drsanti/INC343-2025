/**
 * File: ex18_http_sensor_server.ts
 *
 * Description:
 * Simulates a sensor API by generating random temperature and flow rate data
 * with a timestamp and serving it as JSON via an HTTP server.
 *
 * 🔧 How to Run:
 * -------------------------------
 * deno run --allow-net ex18_http_sensor_server.ts
 */

export {};

import { serve } from "https://deno.land/std/http/server.ts";

// Function to generate random sensor data
function generateSensorData() {
	const timestamp = new Date().toISOString();
	const temperature = (Math.random() * 30 + 10).toFixed(2); // 10°C – 40°C
	const flowRate = (Math.random() * 100).toFixed(2); // 0 – 100 L/min

	return {
		temperature: Number(temperature),
		flowRate: Number(flowRate),
		timestamp,
	};
}

// HTTP handler
const handler = (_req: Request): Response => {
	const sensorData = generateSensorData();

	return new Response(JSON.stringify(sensorData, null, 2), {
		headers: {
			"Content-Type": "application/json",
		},
	});
};

// Start the server
const PORT = 8080;
console.log(`📡 Sensor server is running at http://localhost:${PORT}`);
await serve(handler, { port: PORT });
