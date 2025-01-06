import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@app',
        replacement: path.resolve(__dirname, 'src'),
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
