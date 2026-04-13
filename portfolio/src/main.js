import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css' 

const app = createApp(App)

if (router) {
  app.use(router)
}

app.mount('#app')
