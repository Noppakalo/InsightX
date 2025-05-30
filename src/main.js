import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import { createI18n } from 'vue-i18n'
import th from './locales/th.json'
import en from './locales/en.json'

const i18n = createI18n({
    locale: 'th',
    fallbackLocale: 'en',
    messages: {
        th: th,
        en: en,
    },
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
