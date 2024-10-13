import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
"base":"/proyecto_infantil/",
"deploy":"gh-pages -d dist",
  plugins: [react()],
})
