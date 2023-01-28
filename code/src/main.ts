import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
const app = createApp(App)
document.documentElement.style.fontSize = '1.33vw'
import 'uno.css'

app.use(router)
app.mount('#app')
