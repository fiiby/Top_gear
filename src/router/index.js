import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import ErrorPageView from '@/views/ErrorPageView.vue'
import FooterView from '@/views/FooterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/categories',
      name: 'Categories',
      component: CategoriesView
    },
    {
      path:'/contact',
      name:'Contact',
      component:ContactView
    },
    {
      path:'/:catchAll(.*)',
      name:'ErrorPage',
      component:ErrorPageView,
    },
    
    {
      path:'/footer',
      name:'Footer',
      component:FooterView,
    }

  ]
})

export default router
