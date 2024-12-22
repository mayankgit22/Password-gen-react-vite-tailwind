import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Password-generator-using-react-and-talwind-and-library-vite/', // Adjust this to your repository name
  plugins: [react()],
});

