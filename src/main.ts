import { createApp } from 'vue'
import { key, store } from "./store/index"
import router from "./route/index"
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(store, key)
app.use(router)
app.mount('#app')
