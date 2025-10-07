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
// import { ru } from './locales/ru' // Убрано, не используется

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
import DashboardAdminSystem from './views/DashboardAdminSystem.vue'
import DashboardAdminOu from './views/DashboardAdminOu.vue'
import Statistics from './views/Statistics.vue'
import DodReports from './views/DodReports.vue'

// Test data - убрано

// Types
// import type { RouteMeta } from './types' // Убрано, не используется

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
  { path: '/dashboard-admin-system', name: 'DashboardAdminSystem', component: DashboardAdminSystem },
  { path: '/dashboard-admin-ou', name: 'DashboardAdminOu', component: DashboardAdminOu },
  { path: '/statistics', name: 'Statistics', component: Statistics },
  { path: '/dod-reports', name: 'DodReports', component: DodReports }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard - упрощенная версия
router.beforeEach((_to, _from, next) => {
  // Простой переход без проверок авторизации
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

// Test data initialization - убрано

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
