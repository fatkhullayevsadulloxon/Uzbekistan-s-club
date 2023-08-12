import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: to => {
        // the function receives the target route as the argument
        // we return a redirect path/location here.
        return { path: '/uz', query: { q: to.params.lan } }
      },
    },  
    {
      path: '/:lan/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
