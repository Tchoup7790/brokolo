import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/work', component: WorkView },
  { path: '/contact', component: ContactView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
