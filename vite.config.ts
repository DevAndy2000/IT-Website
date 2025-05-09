import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [react(), Unocss()],
  base: '/', // Set to root for custom domain
})
