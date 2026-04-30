import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

const pageNames = [
  'index',
  'culture',
  'hiring',
  'attendance',
  'leave',
  'conduct',
  'salary',
  'offboarding',
  'finance',
  'closing',
]

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pageNames.map((name) => [name, resolve(__dirname, `${name}.html`)]),
      ),
    },
  },
})