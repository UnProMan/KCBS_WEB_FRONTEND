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
      historyApiFallback: true,
      proxy: {
        [`${BASE_URL}api`]: {
          target: 'https://port-0-kcbs-web-backend-dc9c2nlsiimp11.sel5.cloudtype.app',
          // secure: true,
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