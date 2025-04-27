import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [react(), Unocss()],
  base: '/IT-Website/',  // Change this to match the name of your GitHub repo
})
