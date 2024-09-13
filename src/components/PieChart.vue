<template>
    <div>
      <Pie :data="data" :options="options" />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { Pie } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement);
  
  export default defineComponent({
    name: 'PieChart',
    components: {
      Pie
    },
    props: {
      data: Object,
      options: Object
    }
  });
  </script>
  