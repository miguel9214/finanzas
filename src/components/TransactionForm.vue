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
        category: '',
        error: null // Para almacenar errores
      };
    },
    methods: {
      async addTransaction() {
        this.error = null; // Reiniciar errores
  
        try {
          // Validar que todos los campos estén llenos
          if (!this.type || !this.amount || !this.description || !this.category) {
            this.error = 'Todos los campos son obligatorios.';
            return;
          }
  
          // Agregar la transacción a la colección correspondiente
          await addDoc(collection(db, this.type === 'Ingreso' ? 'incomes' : 'expenses'), {
            amount: parseFloat(this.amount), // Asegúrate de que amount sea un número
            description: this.description,
            category: this.category,
            date: new Date()
          });
  
          // Limpiar el formulario después de agregar
          this.type = '';
          this.amount = '';
          this.description = '';
          this.category = '';
  
          alert('Transacción agregada con éxito!');
        } catch (error) {
          console.error('Error agregando transacción: ', error);
          this.error = 'Hubo un problema al agregar la transacción. Inténtalo de nuevo.';
        }
      }
    }
  };
  </script>
  