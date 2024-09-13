<template>
  <div class="container mt-4">
    <h1 class="text-center">Resumen Financiero</h1>
    <div class="row">
      <div class="col-md-6">
        <h3>Ingresos</h3>
        <p :style="{ color: 'green' }">Total Ingresos: ${{ totalIncome.toFixed(2) }}</p>
      </div>
      <div class="col-md-6">
        <h3>Gastos</h3>
        <p :style="{ color: 'orange' }">Total Gastos: ${{ totalExpense.toFixed(2) }}</p>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-12">
        <h3>Saldo</h3>
        <p :style="{ color: balance < 0 ? 'red' : 'black' }">Saldo: ${{ balance.toFixed(2) }}</p>
      </div>
    </div>
    <div class="row mt-4" v-if="pieChartData && pieChartOptions">
      <div class="col-md-12">
        <h3>Distribución de Ingresos y Gastos</h3>
        <PieChart :data="pieChartData" :options="pieChartOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase'; // Configuración de Firebase
import { collection, getDocs } from 'firebase/firestore';
import PieChart from '../components/PieChart.vue'; // Importa el componente del gráfico

export default {
  components: {
    PieChart
  },
  data() {
    return {
      totalIncome: 0,
      totalExpense: 0,
      balance: 0,
      pieChartData: null,
      pieChartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return `${tooltipItem.label}: $${tooltipItem.raw.toFixed(2)}`;
              }
            }
          }
        }
      }
    };
  },
  async created() {
    await this.calculateTotals();
  },
  methods: {
    async calculateTotals() {
      try {
        // Obtener datos de ingresos
        const incomeQuerySnapshot = await getDocs(collection(db, 'incomes'));
        let incomeTotal = 0;
        incomeQuerySnapshot.forEach((doc) => {
          incomeTotal += doc.data().amount;
        });

        // Obtener datos de gastos
        const expenseQuerySnapshot = await getDocs(collection(db, 'expenses'));
        let expenseTotal = 0;
        expenseQuerySnapshot.forEach((doc) => {
          expenseTotal += doc.data().amount;
        });

        // Calcular saldo
        const calculatedBalance = incomeTotal - expenseTotal;

        // Establecer los totales, saldo y datos del gráfico en el estado
        this.totalIncome = incomeTotal;
        this.totalExpense = expenseTotal;
        this.balance = calculatedBalance;

        this.pieChartData = {
          labels: ['Ingresos', 'Gastos'],
          datasets: [{
            data: [incomeTotal, expenseTotal],
            backgroundColor: ['#42b983', '#ff5722'], // Colores para los ingresos y gastos
            hoverOffset: 4
          }]
        };
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Agrega tus estilos aquí si es necesario */
</style>
