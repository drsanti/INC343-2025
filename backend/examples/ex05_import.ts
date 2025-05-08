/**
 * File: ex05_import.ts
 *
 * Description: Demonstrates how to import and use both variables and functions from another module.
 * This helps you build modular, reusable code in Deno.
 */

// Import constants and functions
import { PI, E, square, circleArea } from "./ex04_export.ts";

// Use imported items
console.log("PI is", PI);
console.log("Euler's number (E) is", E);

console.log("Square of 4 is", square(4));
console.log("Area of a circle with radius 3 is", circleArea(3));
