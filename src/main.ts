import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import scrollAnimate from './directives/scrollAnimation'

const app = createApp(App)

// app.directive('scroll-animate-reverse', scrollAnimate);

app.mount('#app')
