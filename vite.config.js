import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()], 
  server: {
    port: 5173,
    open: true,  // Automatically open the app in the browser when the server starts
    strictPort: true,
  },
  base: './'
  ,
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
