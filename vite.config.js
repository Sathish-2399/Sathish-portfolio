import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
    react()],
    server: {
    proxy: {
      "/leetcode": {
        target: "http://localhost:5000", // your Node.js backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
