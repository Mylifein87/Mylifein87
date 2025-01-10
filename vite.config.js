import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/checkurl': 'http://checkurl.phishtank.com/checkurl/',  // Forward requests to /checkurl to the phishtank API
    },
  },
});