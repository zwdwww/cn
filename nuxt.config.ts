// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-29',
  future: { compatibilityVersion: 4 },

  extends: [
    // https://ui.nuxt.com/pro
    '@nuxt/ui-pro'
  ],

  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-auth-utils',
    '@nuxtjs/plausible'
  ],

  routeRules: {
    // Used for notes.atinux.com
    // Fell free to remove it
    '/nuxt-custom-fetch': { redirect: { to: 'https://nuxt.com/docs/guide/recipes/custom-usefetch', statusCode: 302 } }
  },

  hub: {
    kv: true
  },

  mdc: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'material-theme-palenight'
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  },

  devtools: {
    enabled: true
  }
})
