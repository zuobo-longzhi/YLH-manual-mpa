import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'

const mountNode = document.getElementById('app')
const page = mountNode?.dataset?.page || 'overview'

createApp(App, { page }).mount('#app')
