<template>
    <div class="container mt-4">
      <h1 class="text-center">Transacciones</h1>
      <TransactionForm />
      <TransactionList :transactions="expenses" />
    </div>
  </template>
  
  <script>
  import TransactionForm from '../components/TransactionForm.vue';
  import TransactionList from '../components/TransactionList.vue';
  
  export default {
    data() {
      return {
        expenses: [
          { type: 'Gasto', amount: 100, description: 'Comida', category: 'Alimentación', date: new Date() },
          { type: 'Gasto', amount: 50, description: 'Transporte', category: 'Transporte', date: new Date() }
        ]
      };
    },
    components: {
      TransactionForm,
      TransactionList
    }
  };
  </script>
  