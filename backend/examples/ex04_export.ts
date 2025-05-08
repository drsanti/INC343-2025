/**
 * File: ex04_export.ts
 *
 * Description: Exports constants and arrow functions from a module.
 * Demonstrates how to share both values and logic across files.
 */

// Exporting variables (constants)
export const PI = 3.14159;
export const E = 2.718;

// Exporting arrow functions
export const square = (x: number): number => x * x;
export const circleArea = (r: number): number => PI * square(r);
