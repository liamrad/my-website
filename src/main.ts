import { createApp } from 'vue'
import type { Plugin } from 'vue'
import App from './App.vue'
import './styles/index.postcss'
import 'uno.css'
import 'animate.css'

const app = createApp(App)

const modules = import.meta.glob('./modules/*.ts', { import: 'default', eager: true }) as Record<string, Plugin>
Object.values(modules).forEach(module => app.use(module))

app.mount('#app')
