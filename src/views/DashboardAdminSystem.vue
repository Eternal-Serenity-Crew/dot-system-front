<template>
  <div class="dashboard dashboard-bg">
    <Sidebar :user="user" />
    
    <main class="dashboard-main">
      <Card class="dashboard-main-card">
            <template #title>
              <div class="card-header">
                <h1 class="card-title">Панель администратора платформы</h1>
                <p class="card-subtitle">Управление системой и мониторинг</p>
              </div>
            </template>
            
            <template #content>
              <div class="admin-stats">
                <div class="stat-card">
                  <div class="stat-icon">
                    <i class="pi pi-building"></i>
                  </div>
                  <div class="stat-content">
                    <h3 class="stat-title">Образовательные учреждения</h3>
                    <p class="stat-value">89</p>
                    <p class="stat-change positive">+3 за месяц</p>
                  </div>
                </div>
                
                <div class="stat-card">
                  <div class="stat-icon">
                    <i class="pi pi-users"></i>
                  </div>
                  <div class="stat-content">
                    <h3 class="stat-title">Администраторы ОУ</h3>
                    <p class="stat-value">156</p>
                    <p class="stat-change positive">+8 за месяц</p>
                  </div>
                </div>
                
                <div class="stat-card">
                  <div class="stat-icon">
                    <i class="pi pi-shield"></i>
                  </div>
                  <div class="stat-content">
                    <h3 class="stat-title">Системные администраторы</h3>
                    <p class="stat-value">12</p>
                    <p class="stat-change neutral">Без изменений</p>
                  </div>
                </div>
                
                <div class="stat-card">
                  <div class="stat-icon">
                    <i class="pi pi-chart-line"></i>
                  </div>
                  <div class="stat-content">
                    <h3 class="stat-title">Активность системы</h3>
                    <p class="stat-value">98%</p>
                    <p class="stat-change positive">+2% за неделю</p>
                  </div>
                </div>
              </div>
              
              <div class="admin-sections">
                <div class="section-card">
                  <h3 class="section-title">Быстрые действия</h3>
                  <div class="action-buttons">
                    <Button
                      label="Добавить учреждение"
                      icon="pi pi-plus"
                      class="action-button"
                      @click="addInstitution"
                    />
                    <Button
                      label="Создать администратора ОУ"
                      icon="pi pi-user-plus"
                      class="action-button"
                      @click="createOuAdmin"
                    />
                    <Button
                      label="Сгенерировать отчет"
                      icon="pi pi-file-export"
                      class="action-button"
                      @click="generateReport"
                    />
                    <Button
                      label="Настройки системы"
                      icon="pi pi-cog"
                      class="action-button"
                      @click="systemSettings"
                    />
                  </div>
                </div>
                
                <div class="section-card">
                  <h3 class="section-title">Последние события</h3>
                  <div class="events-list">
                    <div class="event-item">
                      <i class="pi pi-building event-icon"></i>
                      <div class="event-content">
                        <p class="event-text">Добавлено новое учреждение "МБОУ СОШ №15"</p>
                        <p class="event-time">2 часа назад</p>
                      </div>
                    </div>
                    <div class="event-item">
                      <i class="pi pi-user event-icon"></i>
                      <div class="event-content">
                        <p class="event-text">Создан новый администратор ОУ для района "Северный"</p>
                        <p class="event-time">4 часа назад</p>
                      </div>
                    </div>
                    <div class="event-item">
                      <i class="pi pi-file event-icon"></i>
                      <div class="event-content">
                        <p class="event-text">Сгенерирован отчет по активности за месяц</p>
                        <p class="event-time">1 день назад</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Card>
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import type { User } from '@/types'

// Reactive data
const toast = useToast()
const user = ref<User>({} as User)

// Computed properties
const userInfo = computed(() => [
  { label: 'ФИО', value: `${user.value.firstName} ${user.value.lastName}` },
  { label: 'Email', value: user.value.email },
  { label: 'Роль', value: 'Администратор платформы' },
  { label: 'Статус', value: 'Активен' }
])

// Event handlers
const addInstitution = () => {
  toast.add({
    severity: 'info',
    summary: 'Добавление учреждения',
    detail: 'Функция добавления учреждения будет реализована',
    life: 3000
  })
}

const createOuAdmin = () => {
  toast.add({
    severity: 'info',
    summary: 'Создание администратора ОУ',
    detail: 'Функция создания администратора ОУ будет реализована',
    life: 3000
  })
}

const generateReport = () => {
  toast.add({
    severity: 'info',
    summary: 'Генерация отчета',
    detail: 'Функция генерации отчета будет реализована',
    life: 3000
  })
}

const systemSettings = () => {
  toast.add({
    severity: 'info',
    summary: 'Настройки системы',
    detail: 'Функция настроек системы будет реализована',
    life: 3000
  })
}

// Lifecycle
onMounted(() => {
  const userData = localStorage.getItem('user')
  if (userData) {
    user.value = JSON.parse(userData)
  } else {
    // Создаем демо-пользователя если нет данных
    user.value = {
      id: 'demo',
      email: 'demo@example.com',
      firstName: 'Демо',
      lastName: 'Пользователь',
      district: 'central',
      institutionType: 'sosh',
      institutionName: 'Демонстрационное учреждение',
      role: 'admin_system'
    }
  }
})
</script>

<style scoped>
.dashboard {
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  overflow: hidden;
  background-attachment: fixed;
}

.dashboard-bg {
  background-image: url('/src/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.dashboard-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.dashboard-main {
  position: relative;
  z-index: 2;
  padding: 2rem;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  margin-left: 280px;
  transition: margin-left 0.3s ease;
  padding-bottom: 80px; /* Отступ для футера */
}

.dashboard-content {
  animation: fadeIn 0.6s ease-out;
}

.dashboard-main-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.card-header {
  margin-bottom: 2rem;
}

.card-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
}

.card-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  margin: 0;
}

.admin-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  width: 60px;
  height: 60px;
  background: rgba(22, 63, 94, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #163F5E;
  font-size: 1.5rem;
}

.stat-content {
  flex: 1;
}

.stat-title {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0 0 0.5rem 0;
  font-weight: 500;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 0.25rem 0;
}

.stat-change {
  font-size: 0.8rem;
  margin: 0;
  font-weight: 500;
}

.stat-change.positive {
  color: #10b981;
}

.stat-change.neutral {
  color: #6b7280;
}

.admin-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.section-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 1rem 0;
}

.action-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.action-button {
  background: rgba(22, 63, 94, 0.1);
  border: 1px solid rgba(22, 63, 94, 0.3);
  color: #163F5E;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.action-button:hover {
  background: rgba(22, 63, 94, 0.2);
  border-color: rgba(22, 63, 94, 0.5);
  transform: translateY(-1px);
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.event-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.event-item:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: translateX(5px);
}

.event-icon {
  width: 40px;
  height: 40px;
  background: rgba(22, 63, 94, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #163F5E;
  font-size: 1.25rem;
}

.event-content {
  flex: 1;
}

.event-text {
  font-weight: 500;
  color: #2c3e50;
  margin: 0 0 0.25rem 0;
}

.event-time {
  font-size: 0.8rem;
  color: #6b7280;
  margin: 0;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
