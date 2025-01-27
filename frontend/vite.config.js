import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Ensure we're targeting modern browsers
    rollupOptions: {
      output: {
        format: 'es' // Use ES Modules output for better compatibility
      }
    }
  },
  worker: {
    // This ensures workers are handled properly
    format: 'es'
  }
});
