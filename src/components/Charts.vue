<template>
    <div>
      <Bar :data="data" :options="options" />
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  
  // Register Chart.js components
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  export default {
    components: {
      Bar
    },
    props: {
      data: {
        type: Object,
        required: true
      },
      options: {
        type: Object,
        default: () => ({
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return context.dataset.label + ': $' + context.raw;
                }
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        })
      }
    }
  };
  </script>
  