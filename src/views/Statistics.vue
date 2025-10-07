<template>
  <Layout>
    <div class="statistics">
      <Card class="statistics-main-card">
        <template #title>
          <div class="page-header">
            <h1 class="page-title">Статистика</h1>
            <p class="page-subtitle">Аналитика и показатели системы</p>
          </div>
        </template>
        
        <template #content>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="pi pi-users"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-title">Пользователи</h3>
          <p class="stat-value">1,234</p>
          <p class="stat-change positive">+12% за месяц</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <i class="pi pi-building"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-title">Учреждения</h3>
          <p class="stat-value">89</p>
          <p class="stat-change positive">+3 за месяц</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <i class="pi pi-file"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-title">Справки ДОД</h3>
          <p class="stat-value">456</p>
          <p class="stat-change positive">+8% за месяц</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <i class="pi pi-chart-line"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-title">Активность</h3>
          <p class="stat-value">98%</p>
          <p class="stat-change positive">+2% за неделю</p>
        </div>
      </div>
    </div>
    
    <div class="charts-section">
      <div class="chart-card">
        <h3 class="chart-title">Динамика регистраций</h3>
        <div class="chart-placeholder">
          <i class="pi pi-chart-bar chart-icon"></i>
          <p>График динамики регистраций</p>
        </div>
      </div>
      
      <div class="chart-card">
        <h3 class="chart-title">Распределение по районам</h3>
        <div class="chart-placeholder">
          <i class="pi pi-chart-pie chart-icon"></i>
          <p>Круговая диаграмма районов</p>
        </div>
      </div>
    </div>
        </template>
      </Card>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue'
</script>

<style scoped>
.statistics {
  max-width: 1200px;
  margin: 0 auto;
}

.statistics-main-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.page-header {
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  margin: 0;
}

.stats-grid {
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

.charts-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.chart-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.chart-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 1rem 0;
}

.chart-placeholder {
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(22, 63, 94, 0.05);
  border-radius: 12px;
  border: 2px dashed rgba(22, 63, 94, 0.2);
}

.chart-icon {
  font-size: 3rem;
  color: #163F5E;
  margin-bottom: 1rem;
}

.chart-placeholder p {
  color: #6b7280;
  margin: 0;
  font-weight: 500;
}
</style>
