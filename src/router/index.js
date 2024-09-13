import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Incomes from '../views/IncomesView.vue';
import Expenses from '../views/ExpensesView.vue';
import Reports from '../views/ReportsView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/incomes', name: 'Incomes', component: Incomes },
  { path: '/expenses', name: 'Expenses', component: Expenses },
  { path: '/reports', name: 'Reports', component: Reports },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
