<template>
  <div class="about">
    <Card>
      <template #title>
        <div class="flex align-items-center">
          <i class="pi pi-info-circle mr-2"></i>
          О проекте Dot System
        </div>
      </template>
      <template #content>
        <div class="grid">
          <div class="col-12 lg:col-8">
            <h3 class="text-2xl mb-3">Описание проекта</h3>
            <p class="text-lg mb-4">
              Dot System - это современное веб-приложение, созданное с использованием 
              передовых технологий для обеспечения высокой производительности и 
              отличного пользовательского опыта.
            </p>
            
            <h4 class="text-xl mb-3">Основные возможности:</h4>
            <ul class="list-disc pl-6 mb-4">
              <li>Современный интерфейс на основе PrimeVue</li>
              <li>Быстрая разработка с Vite</li>
              <li>Реактивность Vue 3 Composition API</li>
              <li>Адаптивный дизайн для всех устройств</li>
              <li>Модульная архитектура</li>
            </ul>

            <h4 class="text-xl mb-3">Технический стек:</h4>
            <div class="grid">
              <div class="col-12 md:col-6">
                <h5 class="font-semibold mb-2">Frontend:</h5>
                <ul class="list-none p-0">
                  <li class="flex align-items-center mb-1">
                    <i class="pi pi-check text-green-500 mr-2"></i>
                    Vue 3.4+
                  </li>
                  <li class="flex align-items-center mb-1">
                    <i class="pi pi-check text-green-500 mr-2"></i>
                    Vite 5.0+
                  </li>
                  <li class="flex align-items-center mb-1">
                    <i class="pi pi-check text-green-500 mr-2"></i>
                    PrimeVue 3.50+
                  </li>
                  <li class="flex align-items-center">
                    <i class="pi pi-check text-green-500 mr-2"></i>
                    Vue Router 4.2+
                  </li>
                </ul>
              </div>
              <div class="col-12 md:col-6">
                <h5 class="font-semibold mb-2">Инструменты:</h5>
                <ul class="list-none p-0">
                  <li class="flex align-items-center mb-1">
                    <i class="pi pi-check text-blue-500 mr-2"></i>
                    ESLint
                  </li>
                  <li class="flex align-items-center mb-1">
                    <i class="pi pi-check text-blue-500 mr-2"></i>
                    Prettier
                  </li>
                  <li class="flex align-items-center mb-1">
                    <i class="pi pi-check text-blue-500 mr-2"></i>
                    PrimeFlex
                  </li>
                  <li class="flex align-items-center">
                    <i class="pi pi-check text-blue-500 mr-2"></i>
                    PrimeIcons
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="col-12 lg:col-4">
            <Card>
              <template #title>Статистика</template>
              <template #content>
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary mb-2">100%</div>
                  <div class="text-sm text-gray-600 mb-4">Готовность проекта</div>
                  
                  <div class="flex justify-content-between mb-2">
                    <span>Vue 3</span>
                    <span class="font-semibold">3.4.0</span>
                  </div>
                  <div class="flex justify-content-between mb-2">
                    <span>Vite</span>
                    <span class="font-semibold">5.0.0</span>
                  </div>
                  <div class="flex justify-content-between mb-2">
                    <span>PrimeVue</span>
                    <span class="font-semibold">3.50.0</span>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </div>

        <div class="flex justify-content-center mt-4">
          <Button 
            label="Вернуться на главную" 
            icon="pi pi-home" 
            class="p-button-outlined"
            @click="goHome"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'About',
  setup() {
    const router = useRouter()

    const goHome = () => {
      router.push('/')
    }

    return {
      goHome
    }
  }
}
</script>
