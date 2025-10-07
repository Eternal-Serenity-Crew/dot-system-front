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
// System Admin pages
import DashboardSystem from './views/system/DashboardSystem.vue'

// OU Admin pages
import DashboardOu from './views/ou/DashboardOu.vue'
import DodReportsOu from './views/ou/DodReportsOu.vue'
import SettingsOu from './views/ou/SettingsOu.vue'

// Common pages
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
  
  // System Admin routes
  { path: '/system/dashboard', name: 'DashboardSystem', component: DashboardSystem },
  { path: '/system/dod-reports', name: 'DodReportsSystem', component: DodReportsOu }, // Временно используем OU версию
  { path: '/system/institutions', name: 'InstitutionsSystem', component: DashboardSystem }, // Временно используем дашборд
  { path: '/system/ou-admins', name: 'OuAdminsSystem', component: DashboardSystem }, // Временно используем дашборд
  { path: '/system/system-admins', name: 'SystemAdminsSystem', component: DashboardSystem }, // Временно используем дашборд
  { path: '/system/reports', name: 'ReportsSystem', component: DashboardSystem }, // Временно используем дашборд
  
  // OU Admin routes
  { path: '/ou/dashboard', name: 'DashboardOu', component: DashboardOu },
  { path: '/ou/dod-reports', name: 'DodReportsOu', component: DodReportsOu },
  { path: '/ou/settings', name: 'SettingsOu', component: SettingsOu },
  
  // Common routes
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
