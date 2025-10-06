import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

// Components
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import Menubar from 'primevue/menubar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

// Routes
import Home from './views/Home.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

// Register PrimeVue components globally
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Card', Card)
app.component('Menubar', Menubar)
app.component('DataTable', DataTable)
app.component('Column', Column)

app.mount('#app')
