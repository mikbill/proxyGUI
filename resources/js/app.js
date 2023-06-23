require('./bootstrap')

import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import indexComponent from './layouts/index'
import router from './routes'

const app = createApp({})

app.component('index', indexComponent)
app.use(router)
app.mount('#app')
