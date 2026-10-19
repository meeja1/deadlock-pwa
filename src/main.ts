import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from '@/App.vue'
import { router } from '@/config/router'

const app = createApp(App)
const pinia = createPinia()
app
  .use(PrimeVue)
  .use(router)
  .use(pinia)
  .mount('body')
