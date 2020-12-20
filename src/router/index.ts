import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', redirect: '/keep-accounts' },
  { path: '/keep-accounts', name: 'keep-accounts', component: () => import('@/views/KeepAccounts.vue') },
  { path: '/statistic', name: 'statistic', component: () => import('@/views/Statistic.vue') },
  { path: '/wealth', name: 'label', component: () => import('@/views/Wealth.vue') },
  { path: '*', component: () => import('@/views/NotFound.vue') }
]

const router = new VueRouter({
  routes
})

export default router
