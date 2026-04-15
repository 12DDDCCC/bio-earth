import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'cesium': path.resolve(__dirname, './node_modules/cesium/Build/Cesium')
    }
  },
  server: {
    port: 3001,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          cesium: ['cesium']
        }
      }
    }
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify('./cesium')
  },
  optimizeDeps: {
    include: ['sql.js']
  }
})
