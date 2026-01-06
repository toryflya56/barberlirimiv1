import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
        output: {
            // This is needed to make sure that the assets are served correctly from the build folder
            // Vercel will automatically handle the routing
            assetFileNames: `assets/[name].[ext]`
        }
    }
  }
})
