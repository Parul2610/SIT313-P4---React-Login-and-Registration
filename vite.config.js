

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SIT313-P4---React-Login-and-Registration/',
  build: {
    minify: false,
  },
})

