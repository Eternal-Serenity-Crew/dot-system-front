<template>
  <div class="home">
    <Card class="mb-4">
      <template #title>
        <div class="flex align-items-center">
          <i class="pi pi-home mr-2"></i>
          Добро пожаловать в Dot System
        </div>
      </template>
      <template #content>
        <p class="text-lg">
          Это современное веб-приложение, построенное на Vue 3, Vite и PrimeVue.
        </p>
        <p class="mt-3">
          Здесь вы можете найти примеры использования различных компонентов PrimeVue.
        </p>
      </template>
    </Card>

    <div class="grid">
      <div class="col-12 md:col-6 lg:col-4">
        <Card>
          <template #title>Функции</template>
          <template #content>
            <ul class="list-none p-0">
              <li class="flex align-items-center mb-2">
                <i class="pi pi-check text-green-500 mr-2"></i>
                Vue 3 Composition API
              </li>
              <li class="flex align-items-center mb-2">
                <i class="pi pi-check text-green-500 mr-2"></i>
                Vite для быстрой разработки
              </li>
              <li class="flex align-items-center mb-2">
                <i class="pi pi-check text-green-500 mr-2"></i>
                PrimeVue компоненты
              </li>
              <li class="flex align-items-center">
                <i class="pi pi-check text-green-500 mr-2"></i>
                Адаптивный дизайн
              </li>
            </ul>
          </template>
        </Card>
      </div>

      <div class="col-12 md:col-6 lg:col-4">
        <Card>
          <template #title>Технологии</template>
          <template #content>
            <div class="flex flex-wrap gap-2">
              <span class="p-tag p-tag-success">Vue 3</span>
              <span class="p-tag p-tag-info">Vite</span>
              <span class="p-tag p-tag-warning">PrimeVue</span>
              <span class="p-tag p-tag-help">JavaScript</span>
            </div>
          </template>
        </Card>
      </div>

      <div class="col-12 md:col-6 lg:col-4">
        <Card>
          <template #title>Действия</template>
          <template #content>
            <div class="flex flex-column gap-2">
              <Button 
                label="Начать работу" 
                icon="pi pi-play" 
                class="p-button-success"
                @click="showMessage"
              />
              <Button 
                label="Узнать больше" 
                icon="pi pi-info-circle" 
                class="p-button-outlined"
                @click="goToAbout"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>

    <!-- Пример таблицы -->
    <Card class="mt-4">
      <template #title>Пример данных</template>
      <template #content>
        <DataTable :value="sampleData" responsiveLayout="scroll">
          <Column field="name" header="Имя" sortable></Column>
          <Column field="position" header="Должность" sortable></Column>
          <Column field="email" header="Email" sortable></Column>
          <Column field="status" header="Статус" sortable>
            <template #body="slotProps">
              <span 
                :class="'p-tag p-tag-' + (slotProps.data.status === 'Активен' ? 'success' : 'danger')"
              >
                {{ slotProps.data.status }}
              </span>
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    
    const sampleData = ref([
      {
        id: 1,
        name: 'Иван Петров',
        position: 'Frontend разработчик',
        email: 'ivan@example.com',
        status: 'Активен'
      },
      {
        id: 2,
        name: 'Мария Сидорова',
        position: 'UI/UX дизайнер',
        email: 'maria@example.com',
        status: 'Активен'
      },
      {
        id: 3,
        name: 'Алексей Козлов',
        position: 'Backend разработчик',
        email: 'alexey@example.com',
        status: 'Неактивен'
      }
    ])

    const showMessage = () => {
      // Здесь можно добавить toast уведомление
      console.log('Начинаем работу!')
    }

    const goToAbout = () => {
      router.push('/about')
    }

    return {
      sampleData,
      showMessage,
      goToAbout
    }
  }
}
</script>
