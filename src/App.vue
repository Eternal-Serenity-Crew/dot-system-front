<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// TypeScript setup для App.vue
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* Анимации появления плашек при загрузке */
.login-card,
.register-card,
.dashboard-card {
  animation: fadeIn 0.4s ease-out;
}

.login-card-inner,
.register-card-inner {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Глобальные стили скроллбара */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #163F5E;
  border-radius: 10px;
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: #1e4a6b;
}

/* Для Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #163F5E rgba(0, 0, 0, 0.1);
}
</style>
