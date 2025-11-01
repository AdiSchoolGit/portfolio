import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(
    import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
            '@/components': path.resolve(__dirname, './Components'),
            '@/integrations': path.resolve(__dirname, './integrations'),
            '@/lib': path.resolve(__dirname, './lib')
        }
    },
    server: {
        port: 3000,
        open: true
    }
})