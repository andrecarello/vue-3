// lodash
window._ = require('lodash')

// core
import { createApp } from 'vue'
import App from '@/App.vue'
import { controller } from '@/bootstrap';
import router from '@/router'
import store from '@/store'
import axios from 'axios'

// components
import container from '@/resources/components/container/index.vue'
// import feather from '@/resources/components/icons/feather/index.vue'
import material from '@/resources/components/icons/material/index.vue'

// tailwind styles
import '@/assets/styles/app.css'

// controllers
_.controller = controller
_.controllers = []

const controllerFiles = require.context('@/controllers/', true, /\.js$/i)
controllerFiles.keys().map(key => {
  const name = key.split('/').pop().split('.')[0];
	_.controllers.push(name);
})

const app = createApp(App)

// components
app.component('container', container)
// app.component('feather', feather)
app.component('material-icon', material)

// global properties
// app.config.globalProperties.$http = axios
_.$axios = axios

app.use(store)
app.use(router)
app.mount('#app')
