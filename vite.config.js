import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          mui: ['@mui/material'],
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});