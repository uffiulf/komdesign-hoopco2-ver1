import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'build' ? process.env.VITE_BASE_PATH || '/' : '/';
  return {
    plugins: [react()],
    base: base,
  };
});
