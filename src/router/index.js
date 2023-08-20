import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import MasterResidentView from '../views/MasterResidentView.vue'

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
    {
      path: '/:lan/about-us',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:lan/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/:lan/master-residents',
      name: 'master-resident',
      component: MasterResidentView
    },
  ]
})

export default router
