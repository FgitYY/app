import Vue from 'vue'
import VueRouter from 'vue-router'
import  Main from '../views/Main.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/Index',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/Track',
        name: 'Track',
        component: () => import('../views/Track.vue')
      },
      {
        path: '/Mine',
        name: 'Mine',
        component: () => import('../views/Mine.vue')
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
