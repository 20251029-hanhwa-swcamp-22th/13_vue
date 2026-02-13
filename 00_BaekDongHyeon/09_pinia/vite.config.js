import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  // .env, .env.local, .env.[mode], .env.[mode].local 을 mode 기준으로 로드
  // 3번째 인자를 ''로 주면 VITE_로 시작하지 않는 변수도 로드되지만,
  // 보통은 VITE_ prefix만 쓰는 것을 권장.
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },

    // 예: .env의 VITE_API_BASE_URL 값을 이용해 proxy target 설정
    // (현재 .env 값: http://192.168.0.2:8080/api/v1)
    server: {
      proxy: {
        '/api/v1': {
          target: env.VITE_API_BASE_URL.replace(/\/api\/v1\/?$/, ''),
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/v1/, '')
        }
      }
    }
  }
})