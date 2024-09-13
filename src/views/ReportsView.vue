<template>
    <div class="container mt-4">
      <h1 class="text-center">Reportes Financieros</h1>
      <Charts :data="chartData" />
    </div>
  </template>
  
  <script>
  import Charts from '../components/Charts.vue';
  
  export default {
    components: {
      Charts
    },
    data() {
      return {
        chartData: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
          datasets: [
            {
              label: 'Ingresos',
              data: [1200, 1500, 1700, 2000, 1800], // Datos de ejemplo
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            },
            {
              label: 'Gastos',
              data: [800, 1200, 1100, 1500, 1300], // Datos de ejemplo
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }
          ]
        }
      };
    }
  };
  </script>
  