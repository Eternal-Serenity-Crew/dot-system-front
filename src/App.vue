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

/* Русификация индикатора силы пароля */
.p-password-meter {
  background: #e5e7eb;
  height: 4px;
  border-radius: 2px;
  margin-top: 0.5rem;
}

.p-password-meter-fill {
  background: #ef4444;
  height: 100%;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.p-password-meter-fill.medium {
  background: #f59e0b;
}

.p-password-meter-fill.strong {
  background: #10b981;
}

.p-password-info {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
  display: block;
  font-weight: 500;
}

.p-password-info.weak {
  color: #ef4444;
}

.p-password-info.medium {
  color: #f59e0b;
}

.p-password-info.strong {
  color: #10b981;
}

/* Убеждаемся, что текст виден */
.p-password .p-password-info {
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
}

/* Дополнительные стили для индикатора пароля */
.p-password .p-password-panel {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  margin-top: 0.25rem;
}

.p-password .p-password-info {
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.p-password .p-password-info.weak {
  color: #ef4444;
}

.p-password .p-password-info.medium {
  color: #f59e0b;
}

.p-password .p-password-info.strong {
  color: #10b981;
}

/* Убираем встроенный индикатор пароля, используем кастомный */
.p-password .p-password-panel {
  display: none;
}
</style>
