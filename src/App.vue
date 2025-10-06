<template>
  <div id="app">
    <Menubar :model="menuItems" class="mb-4">
      <template #start>
        <h2 class="text-2xl font-bold text-primary">Dot System</h2>
      </template>
    </Menubar>
    
    <main class="container mx-auto px-4">
      <router-view />
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const menuItems = ref([
      {
        label: 'Главная',
        icon: 'pi pi-home',
        command: () => {
          // Navigation handled by router-link
        }
      },
      {
        label: 'О проекте',
        icon: 'pi pi-info-circle',
        command: () => {
          // Navigation handled by router-link
        }
      }
    ])

    return {
      menuItems
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  max-width: 1200px;
}
</style>
