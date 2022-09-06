import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
  includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
  base: '/',
  manifest: {
    name: "The Ton Le's Website",
    short_name: "Tony's Website",
    description: "The Ton Le's Website",
    theme_color: '#000000',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  workbox: {
    cleanupOutdatedCaches: false,
    sourcemap: true,
  },
}

const replaceOptions = { __DATE__: new Date().toISOString() }

if (process.env.SW === 'true') {
  pwaOptions.srcDir = 'src'
  pwaOptions.filename = 'sw.ts'
  pwaOptions.strategies = 'injectManifest'
  ;(pwaOptions.manifest as Partial<ManifestOptions>).name = "The Ton Le's Website"
  ;(pwaOptions.manifest as Partial<ManifestOptions>).short_name = "Tony's Website"
} else {
  if (process.env.CLAIMS === 'true') pwaOptions.registerType = 'autoUpdate'

  if (process.env.RELOAD_SW === 'true') {
    // @ts-ignore
    replaceOptions.__RELOAD_SW__ = 'true'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      // @ts-ignore
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
