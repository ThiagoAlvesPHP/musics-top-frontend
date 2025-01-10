import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 8080,
    watch: {
      usePolling: true, // Ativa o polling
      interval: 100,    // Define o intervalo de polling (opcional, ajuste conforme necessário)
    },
  },
  resolve: {
    alias: [
      {
        find: '@app',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@containers',
        replacement: path.resolve(__dirname, 'src/containers'),
      },
      {
        find: '@config',
        replacement: path.resolve(__dirname, 'src/core/config'),
      },
      {
        find: '@slices',
        replacement: path.resolve(__dirname, 'src/core/slices'),
      },
      {
        find: '@views',
        replacement: path.resolve(__dirname, 'src/views'),
      },
    ],
  },
})
