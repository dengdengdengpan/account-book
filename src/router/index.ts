import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', redirect: '/detail' },
  // { path: '/keep-accounts', name: 'keep-accounts', component: () => import('@/views/KeepAccounts.vue') },
  { path: '/detail', name: 'detail', component: () => import('@/views/Detail.vue') },
  { path: '/statistic', name: 'statistic', component: () => import('@/views/Statistic.vue') },
  { path: '/label', name: 'label', component: () => import('@/views/Label.vue') },
  { path: '*', component: () => import('@/views/NotFound.vue') }
]

const router = new VueRouter({
  routes
})

export default router
