<template>
    <form @submit.prevent="addTransaction" class="container mt-4">
      <div class="mb-3">
        <label for="type" class="form-label">Tipo de Transacción</label>
        <select v-model="type" class="form-select" required>
          <option value="">Selecciona...</option>
          <option value="Ingreso">Ingreso</option>
          <option value="Gasto">Gasto</option>
        </select>
      </div>
  
      <div class="mb-3">
        <label for="amount" class="form-label">Cantidad</label>
        <input v-model="amount" type="number" class="form-control" placeholder="Ingresa la cantidad" required />
      </div>
  
      <div class="mb-3">
        <label for="description" class="form-label">Descripción</label>
        <input v-model="description" class="form-control" placeholder="Ingresa la descripción" required />
      </div>
  
      <div class="mb-3">
        <label for="category" class="form-label">Categoría</label>
        <input v-model="category" class="form-control" placeholder="Categoría de la transacción" required />
      </div>
  
      <button type="submit" class="btn btn-primary">Agregar Transacción</button>
    </form>
  </template>
  
  <script>
  import { db } from '../firebase'; // Configuración de Firebase
  import { collection, addDoc } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        type: '',
        amount: '',
        description: '',
        category: ''
      };
    },
    methods: {
      async addTransaction() {
        const collectionName = this.type === 'Ingreso' ? 'incomes' : 'expenses';
        
        try {
          await addDoc(collection(db, collectionName), {
            amount: this.amount,
            description: this.description,
            category: this.category,
            date: new Date(),
            type: this.type // Asegúrate de que el tipo está incluido
          });
          alert('Transacción agregada!');
          this.resetForm();
        } catch (error) {
          console.error('Error al agregar la transacción:', error);
        }
      },
      resetForm() {
        this.type = '';
        this.amount = '';
        this.description = '';
        this.category = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Agrega estilos personalizados aquí */
  </style>
  