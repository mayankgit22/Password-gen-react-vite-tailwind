import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Password-gen-react-vite-tailwind/', // replace <your-repo-name> with your actual GitHub repo name
});
