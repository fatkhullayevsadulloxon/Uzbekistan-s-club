import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import MasterResidentView from '../views/MasterResidentView.vue'
import ResidentView from '../views/ResidentView.vue'
import MediResidentView from '../views/MediResidentView.vue'
import ResidentsSingleView from '../views/ResidentsSingleView.vue'
import SingleMasterResidents from '../views/SingleMasterResidents.vue'
import SingleMediaResidents from '../views/SingleMediaResidents.vue'
import ProfileSingleView from '../views/ProfileSingleView.vue'

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
    {
      path: '/:lan/residents',
      name: 'resident',
      component: ResidentView
    },
    {
      path: '/:lan/media-residents',
      name: 'media-residents',
      component: MediResidentView
    },

    // SINGLE PAGE
    {
      path: '/:lan/residents/:name/',
      name: 'residentssingle',
      component: ResidentsSingleView
    },
    {
      path: '/:lan/master-residents/:name/',
      name: 'master-residentssingle',
      component: SingleMasterResidents
    },
    {
      path: '/:lan/media-residents/:name/',
      name: 'media-residentssingle',
      component: SingleMediaResidents
    },
    {
      path: '/:lan/top/:profile/',
      name: 'profile-single',
      component: ProfileSingleView
    },
  ]
})

export default router
