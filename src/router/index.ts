import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Label from '@/views/Label.vue'
// import Money from '@/views/Money.vue'
// import Statistic from '@/views/Statistic.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/label',
    name: 'label',
    component: () => import('@/views/Label.vue')
  },
  {
    path: '/money',
    name: 'money',
    component: () => import('@/views/Money.vue')
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: () => import('@/views/Statistic.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
