import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core in its own cacheable chunk
          'vendor-react': ['react', 'react-dom'],
          // Heavy icon/animation libs separated out
          'vendor-icons': ['react-icon-cloud', 'simple-icons'],
          'vendor-motion': ['framer-motion'],
          'vendor-lucide': ['lucide-react'],
        },
      },
    },
  },
})



