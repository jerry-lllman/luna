import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import ESLintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ESLintPlugin({
    //   cache: true,
    //   fix: true,
    //   extensions: ['.js', '.jsx', '.ts', '.tsx']
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve('.', 'src')
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
})
