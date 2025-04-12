import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/silv-portfolio/',
  port: 3000,
  // server: {
  //   proxy: {
  //     '/': {
  //       target: 'http://localhost:5000',
  //       changeOrigin: true,
  //     },
  //   },
  // }
})
