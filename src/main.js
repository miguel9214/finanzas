import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Importar Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import $ from 'jquery';
import Popper from 'popper.js';
import './assets/global.css'; 

// Asegúrate de que jQuery esté disponible globalmente
window.$ = $;
window.Popper = Popper;

// Importar Bootstrap JS (opcional si necesitas scripts de Bootstrap)
import 'bootstrap/dist/js/bootstrap.bundle.js';

createApp(App).use(store).use(router).mount('#app')
