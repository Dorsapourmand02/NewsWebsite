import { defineConfig } from 'vite'
// import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // تغییر پورت به ۸۰
    strictPort: true, // مطمئن شوید فقط همین پورت استفاده می‌شود
  },

})

