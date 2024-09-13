<template>
    <div class="container mt-4">
      <h3 class="text-center mb-4">Lista de Transacciones</h3>
      
      <table class="table table-striped table-bordered">
        <thead class="table-dark">
          <tr>
            <th scope="col">Tipo</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Descripción</th>
            <th scope="col">Categoría</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.type }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.description }}</td>
            <td>{{ transaction.category }}</td>
            <td>{{ new Date(transaction.date.seconds * 1000).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { db } from '../firebase'; // Configuración de Firebase
  import { collection, onSnapshot } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        transactions: []
      };
    },
    created() {
      // Escuchar cambios en las colecciones de gastos e ingresos
      this.unsubscribeExpenses = onSnapshot(collection(db, 'expenses'), (snapshot) => {
        const expenses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        this.updateTransactions(expenses, 'expenses');
      });
  
      this.unsubscribeIncomes = onSnapshot(collection(db, 'incomes'), (snapshot) => {
        const incomes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        this.updateTransactions(incomes, 'incomes');
      });
    },
    beforeDestroy() {
      // Detener la escucha cuando el componente se destruya
      if (this.unsubscribeExpenses) this.unsubscribeExpenses();
      if (this.unsubscribeIncomes) this.unsubscribeIncomes();
    },
    methods: {
      updateTransactions(newData, type) {
        if (type === 'expenses') {
          const incomes = this.transactions.filter(t => t.type === 'Ingreso');
          this.transactions = [...newData, ...incomes];
        } else if (type === 'incomes') {
          const expenses = this.transactions.filter(t => t.type === 'Gasto');
          this.transactions = [...expenses, ...newData];
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Agrega estilos personalizados aquí */
  </style>
  