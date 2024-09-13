<template>
    <div class="container mt-4">
      <h1 class="text-center">Gestión de Ingresos</h1>
      <TransactionForm />
      <TransactionList :transactions="incomes" />
    </div>
  </template>
  
  <script>
  import TransactionForm from '../components/TransactionForm.vue';
  import TransactionList from '../components/TransactionList.vue';
  
  export default {
    data() {
      return {
        incomes: [
          { type: 'Ingreso', amount: 500, description: 'Salario', category: 'Trabajo', date: new Date() },
          { type: 'Ingreso', amount: 200, description: 'Freelance', category: 'Trabajo', date: new Date() }
        ]
      };
    },
    components: {
      TransactionForm,
      TransactionList
    }
  };
  </script>