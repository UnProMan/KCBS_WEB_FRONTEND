import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const BASE_URL = env.VITE_ROUTER_BASE_URL;
  return {
    plugins: [
      vue(),
    ],
    base: '',
    server: {
      proxy: {
        [`${BASE_URL}api`]: {
          target: 'http://127.0.0.1:8080',
          secure: true,
          changeOrigin: true,
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})