import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  base: '/YLH-manual-mpa/',
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
    rollupOptions: {
      input: {
        index: resolvePath('./index.html'),
        culture: resolvePath('./culture.html'),
        hiring: resolvePath('./hiring.html'),
        attendance: resolvePath('./attendance.html'),
        leave: resolvePath('./leave.html'),
        conduct: resolvePath('./conduct.html'),
        salary: resolvePath('./salary.html'),
        offboarding: resolvePath('./offboarding.html'),
        finance: resolvePath('./finance.html'),
        closing: resolvePath('./closing.html'),
      },
    },
  },
})