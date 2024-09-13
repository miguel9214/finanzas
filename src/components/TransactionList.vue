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
  import { collection, getDocs } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        transactions: []
      };
    },
    async created() {
      try {
        const expensesSnapshot = await getDocs(collection(db, 'expenses'));
        const incomesSnapshot = await getDocs(collection(db, 'incomes'));
  
        // Combine data from both collections
        const expenses = expensesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const incomes = incomesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Merge into a single array
        this.transactions = [...expenses, ...incomes];
      } catch (error) {
        console.error('Error al obtener las transacciones:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Agrega estilos personalizados aquí */
  </style>
  