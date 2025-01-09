import { defineConfig } from "vite";
import * as path from 'path'

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest-setup.js",
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
});