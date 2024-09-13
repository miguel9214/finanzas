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
          <tr v-for="transaction in paginatedTransactions" :key="transaction.id">
            <td :class="getTypeClass(transaction.type)">{{ transaction.type }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.description }}</td>
            <td>{{ transaction.category }}</td>
            <td>{{ new Date(transaction.date.seconds * 1000).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Paginador -->
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="prevPage">Anterior</a>
          </li>
          <li class="page-item" :class="{ active: currentPage === i }" v-for="i in totalPages" :key="i">
            <a class="page-link" href="#" @click.prevent="goToPage(i)">{{ i }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="nextPage">Siguiente</a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import { db } from '../firebase'; // Configuración de Firebase
  import { collection, onSnapshot } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        transactions: [],
        currentPage: 1,
        pageSize: 10 // Número de registros por página
      };
    },
    computed: {
      paginatedTransactions() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.transactions.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.transactions.length / this.pageSize);
      }
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
      },
      getTypeClass(type) {
        return type === 'Gasto' ? 'text-danger' : 'text-success'; // Clases CSS para color
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      goToPage(page) {
        this.currentPage = page;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos de paginación */
  .pagination {
    margin-top: 20px;
  }
  
  /* Colores personalizados para los tipos de transacciones */
  .text-success {
    color: #28a745; /* Verde para Ingreso */
  }
  
  .text-danger {
    color: #dc3545; /* Rojo para Gasto */
  }
  </style>
  