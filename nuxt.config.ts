import process from 'node:process'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: 'http://localhost:2000', // 'https://api.pharma-study.uz',
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/content',
    // '@sidebase/nuxt-auth',
  ],

  plugins: ['@/plugins/reset-scroll', '@/plugins/loadUser'],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    'vue3-pdf-app/dist/icons/main.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    // prerender: {
    //   crawlLinks: false,
    //   routes: ['/'],
    // },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },
  pwa,
  devtools: {
    enabled: true,
  },
  content: {
    highlight: {
      theme: 'solarized-light',
      preload: ['ts', 'tsx', 'js', 'swift', 'scss', 'css'],
    },
    markdown: {
      rehypePlugins: [
        [
          'rehype-add-classes',
          {
            h1: 'text-4xl font-mplus font-bold gray-h1 mb-1em',
            h2: 'text-2xl font-mplus font-bold',
            h3: 'text-xl font-mplus font-bold',
            h4: 'text-lg font-mplus font-bold',
            h5: 'font-mplus font-bold',
            h6: 'font-mplus font-bold',
            // img: 'bdy-img text-center border b-red-400',
            // p: 'mb-1em mt-1em aaa',
            a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
            ul: 'list-disc',
            li: 'list-disc',
          },
        ],
      ],
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },
})
