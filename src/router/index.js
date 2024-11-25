import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import ContactView from '@/views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path: '/', component: HomeView },
  { path: '/work', component: WorkView },
  { path: '/contact', component: ContactView }
  ],
})

export default router
