import './assets/main.scss'
import { i18n } from './i18n'
import mitt from 'mitt'

import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

import 'floating-vue/dist/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FloatingVue from 'floating-vue'

import App from './App.vue'
import router from './router'

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.$mitt = emitter

app.use(createPinia())
app.use(router)
app.use(FloatingVue)
app.use(i18n)

app.mount('#app')
