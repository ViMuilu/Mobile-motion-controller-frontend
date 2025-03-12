import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()], 
  server: {
    port: 5173,  // You can change this if you need to use another port
    open: true,  // Automatically open the app in the browser when the server starts
  },
  base: './'
});
