import { createApp } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import App from './App.vue'

// PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/styles.css'

// Locale
import { ru } from './locales/ru'

// Components
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import Menubar from 'primevue/menubar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'
import Password from 'primevue/password'
import Message from 'primevue/message'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

// Routes
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import EmailVerification from './views/auth/EmailVerification.vue'
import Dashboard from './views/Dashboard.vue'

// Test data
import { initializeTestData } from './data/testUsers.js'

// Types
import type { RouteMeta } from './types'

// Расширяем типы для Vue Router
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    title?: string
  }
}

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/verify-email', name: 'EmailVerification', component: EmailVerification },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard с анимациями
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user')
  
  // Проверка авторизации
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
    return
  } else if ((to.name === 'Login' || to.name === 'Register') && isAuthenticated) {
    next('/dashboard')
    return
  }
  
  // Простой переход - анимации применяются автоматически через CSS
  next()
})

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  locale: {
    password: {
      weak: 'Слабый',
      medium: 'Средний',
      strong: 'Сильный'
    }
  },
  ripple: true
})
app.use(ToastService)

// Initialize test data
initializeTestData()

// Register PrimeVue components globally
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Card', Card)
app.component('Menubar', Menubar)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Dropdown', Dropdown)
app.component('Password', Password)
app.component('Message', Message)
app.component('Toast', Toast)

app.mount('#app')
