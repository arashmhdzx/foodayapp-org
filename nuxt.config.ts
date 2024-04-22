// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        '/public/assets/css/main.css',
        '/public/assets/css/index.css',
        '/public/assets/css/ravi.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
        '/public/assets/css/fontAwesome.min.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: [
        'vue3-carousel-nuxt'
    ]
})