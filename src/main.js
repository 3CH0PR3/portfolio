

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/scss/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// progress: {
// 	color: '#4f46e5',
// 	includeCSS: true,
// },

app.mount('#dev')