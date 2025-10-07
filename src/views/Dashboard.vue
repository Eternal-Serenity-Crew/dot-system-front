<template>
  <div class="dashboard dashboard-bg">
    <Menubar :model="menuItems" class="dashboard-menubar">
      <template #start>
        <div class="flex align-items-center gap-3">
          <div class="logo-container">
            <img :src="logo" alt="Logo" class="logo-small" />
          </div>
          <h2 class="text-2xl font-bold text-white">Dot System</h2>
        </div>
      </template>
      <template #end>
        <div class="flex align-items-center gap-3">
          <span class="text-sm text-white">{{ user.fullName }}</span>
          <span class="p-tag modern-tag" :class="user.role === 'admin_system' ? 'p-tag-danger' : 'p-tag-info'">
            {{ user.role === 'admin_system' ? 'Администратор системы' : 'Администратор ОУ' }}
          </span>
          <Button
            label="Выйти"
            icon="pi pi-sign-out"
            class="modern-button-outlined"
            @click="handleLogout"
          />
        </div>
      </template>
    </Menubar>
    
    <main class="dashboard-main">
      <div class="dashboard-container">
        <div class="dashboard-content">
          <Card class="dashboard-main-card">
            <template #title>
              <div class="flex align-items-center">
                <i class="pi pi-home mr-2 text-primary"></i>
                <span class="text-xl font-semibold text-gray-800">Панель управления</span>
              </div>
            </template>
            <template #content>
              <div class="grid">
                <div class="col-12 md:col-6 lg:col-4">
                  <Card class="text-center info-card dashboard-info-card">
                    <template #content>
                      <div class="info-icon">
                        <i class="pi pi-user text-4xl text-primary mb-3"></i>
                      </div>
                      <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ user.fullName }}</h3>
                      <p class="text-gray-600">Администратор ОУ</p>
                    </template>
                  </Card>
                </div>

                <div class="col-12 md:col-6 lg:col-4">
                  <Card class="text-center info-card dashboard-info-card">
                    <template #content>
                      <div class="info-icon">
                        <i class="pi pi-building text-4xl text-green-500 mb-3"></i>
                      </div>
                      <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ user.institutionName }}</h3>
                      <p class="text-gray-600">{{ getInstitutionTypeLabel(user.institutionType) }}</p>
                    </template>
                  </Card>
                </div>

                <div class="col-12 md:col-6 lg:col-4">
                  <Card class="text-center info-card dashboard-info-card">
                    <template #content>
                      <div class="info-icon">
                        <i class="pi pi-map-marker text-4xl text-orange-500 mb-3"></i>
                      </div>
                      <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ getDistrictLabel(user.district) }}</h3>
                      <p class="text-gray-600">Район</p>
                    </template>
                  </Card>
                </div>
              </div>

              <div class="mt-4">
                <h3 class="text-xl font-semibold mb-3 text-gray-800">Информация о пользователе</h3>
                <Card class="info-table-card">
                  <template #content>
                    <DataTable :value="userInfo" responsiveLayout="scroll" class="modern-datatable">
                      <Column field="label" header="Поле" class="font-semibold"></Column>
                      <Column field="value" header="Значение"></Column>
                    </DataTable>
                  </template>
                </Card>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import logo from '@/assets/logo.svg'
import type { User } from '@/types'

// Reactive data
const router = useRouter()
const toast = useToast()

const user = ref<User>({} as User)

// Menu items
const menuItems = ref([
  {
    label: 'Главная',
    icon: 'pi pi-home',
    command: () => {
      // Navigation logic
    }
  },
  {
    label: 'Пользователи',
    icon: 'pi pi-users',
    command: () => {
      // Navigation logic
    }
  },
  {
    label: 'Настройки',
    icon: 'pi pi-cog',
    command: () => {
      // Navigation logic
    }
  }
])

// Computed properties
const userInfo = computed(() => [
  { label: 'ФИО', value: `${user.value.firstName} ${user.value.lastName}` },
  { label: 'Email', value: user.value.email },
  { label: 'Роль', value: 'Администратор ОУ' },
  { label: 'Образовательное учреждение', value: user.value.institutionName },
  { label: 'Вид ОУ', value: getInstitutionTypeLabel(user.value.institutionType) },
  { label: 'Район', value: getDistrictLabel(user.value.district) },
  { label: 'Дата регистрации', value: 'Не указана' }
])

// Helper functions
const getInstitutionTypeLabel = (type: string): string => {
  const types: Record<string, string> = {
    'sosh': 'Средняя общеобразовательная школа (СОШ)',
    'spo': 'Среднее профессиональное образование (СПО)',
    'do': 'Дошкольное образование (ДО)',
    'additional': 'Дополнительное образование',
    'special': 'Специальное образование'
  }
  return types[type] || type
}

const getDistrictLabel = (district: string): string => {
  const districts: Record<string, string> = {
    'central': 'Центральный район',
    'north': 'Северный район',
    'south': 'Южный район',
    'east': 'Восточный район',
    'west': 'Западный район'
  }
  return districts[district] || district
}

// Event handlers
const handleLogout = (): void => {
  localStorage.removeItem('user')
  toast.add({
    severity: 'info',
    summary: 'Выход',
    detail: 'Вы успешно вышли из системы',
    life: 3000
  })
  router.push('/login')
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
      institutionName: 'Демонстрационное учреждение'
    }
  }
})
</script>

<style scoped>
.dashboard {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-attachment: fixed;
  position: relative;
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

.dashboard-menubar {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.dashboard-main {
  position: relative;
  z-index: 2;
  padding: 2rem;
  height: calc(100vh - 80px);
  overflow-y: auto;
}

.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-content {
  animation: fadeIn 0.6s ease-out;
}

.dashboard-main-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: slideUp 0.6s ease-out;
}

.dashboard-main-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.info-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  animation: slideInUp 0.6s ease-out;
}

.dashboard-info-card {
  animation: slideInUp 0.6s ease-out;
}

.dashboard-info-card:nth-child(1) { animation-delay: 0.1s; }
.dashboard-info-card:nth-child(2) { animation-delay: 0.2s; }
.dashboard-info-card:nth-child(3) { animation-delay: 0.3s; }

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, 0.95);
}

.info-table-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.info-icon {
  animation: iconPulse 2s ease-in-out infinite;
}

.logo-container {
  /* Убрана анимация логотипа */
}

.logo-small {
  height: 40px;
  width: auto;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  transition: all 0.3s ease;
}

.logo-small:hover {
  transform: scale(1.1);
}

.modern-tag {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.modern-button-outlined {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.modern-button-outlined:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-1px);
}

.modern-datatable {
  background: transparent;
}

.modern-datatable .p-datatable-header {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px 8px 0 0;
}

.modern-datatable .p-datatable-tbody > tr {
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modern-datatable .p-datatable-tbody > tr:hover {
  background: rgba(255, 255, 255, 0.1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
</style>
