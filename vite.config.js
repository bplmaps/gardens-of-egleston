import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
export default defineConfig({
  base: '/gardens-of-egleston/',
  plugins: [svelte(), tailwindcss()],
})
