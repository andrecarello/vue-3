// core
import { createApp } from 'vue'
import App from '@/App.vue'
// import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import axios from 'axios'

// components
import container from '@/resources/components/container/index.vue'
// import feather from '@/resources/components/icons/feather/index.vue'
import material from '@/resources/components/icons/material/index.vue'

// tailwind styles
import '@/assets/styles/app.css'


const app = createApp(App)

// components
app.component('container', container)
// app.component('feather', feather)
app.component('material-icon', material)

// global properties
app.config.globalProperties.$http = axios

app.use(store)
app.use(router)
app.mount('#app')
