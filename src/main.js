// src/main.js
import './assets/main.css'

import { createApp } from 'vue'
// YENİ: createHead'i import et
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// YENİ: Head yönetimini etkinleştir
app.use(createHead())
app.use(router)

app.mount('#app')