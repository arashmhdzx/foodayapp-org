/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        fontFamily: {
            ravi: ["ravi"],
        },
        extend: {
            colors:{
                main:"#ffc600",
                secondary:'#2e2e2e'
            },
            screens: {
                'wsm': { 'min': '300px', 'max': '767px' },
                'wmd': { 'min': '768px', 'max': '991px' },
                'wlg': { 'min': '992px', 'max': '1250px' },
                'wxl': { 'min': '1251px' },
            },
        },
    },
    plugins: [],
}