/**
 * File: ex07_set_interval.ts
 *
 * Description: Demonstrates how to use setInterval in Deno to repeat tasks on a schedule.
 * Also shows how to stop the interval using clearInterval.
 */

// Counter to track how many times we've printed
let count = 0;

// Function to run every second
const intervalId = setInterval(() => {
	count++;
	console.log(`⏰ Tick ${count}`);

	// Stop after 5 ticks
	if (count >= 5) {
		clearInterval(intervalId);
		console.log("✅ Done! Interval cleared.");
	}
}, 1000);

console.log("Starting timer...");
