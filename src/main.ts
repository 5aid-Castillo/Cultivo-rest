import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {i18n} from './i18n'
const app = createApp(App)
app.use(router)
app.use(i18n)
AOS.init()

app.mount('#app')
