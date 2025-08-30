import { fileURLToPath, URL } from 'node:url'
import frappeui from "frappe-ui/vite";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vite.dev/config/
export default defineConfig({
  
  plugins: [    
    vue(),
    frappeui({
      lucideIcons:true,
      frappeTypes:true,
      buildConfig:false
    }),
  ],  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
	server: {
		allowedHosts: true,
	},
  optimizeDeps: {
		include: ["frappe-ui > feather-icons", "showdown", "engine.io-client"],
	},
})
