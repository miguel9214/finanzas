<template>
  <div class="container mt-4">
    <h1 class="text-center">Resumen de Finanzas</h1>
    <p class="text-center">Aquí puedes ver un resumen general de tus ingresos y gastos.</p>

    <div class="row mt-4">
      <div class="col-md-6">
        <h3>Total Ingresos: ${{ totalIncomes }}</h3>
      </div>
      <div class="col-md-6">
        <h3>Total Gastos: ${{ totalExpenses }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalIncomes: 0,
      totalExpenses: 0
    };
  },
  mounted() {
    // Lógica para obtener los ingresos y gastos
    this.totalIncomes = 5000; // Ejemplo
    this.totalExpenses = 3000; // Ejemplo
  }
};
</script>
