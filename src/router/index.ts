import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', redirect: '/account-overview' },
  { path: '/account-overview', name: 'account', component: () => import('@/views/AccountOverview.vue') },
  { path: '/statistic', name: 'statistic', component: () => import('@/views/Statistic.vue') },
  { path: '/wealth', name: 'label', component: () => import('@/views/Wealth.vue') },
  { path: '/account-add', component: () => import('@/views/AccountAdd.vue') },
  { path: '*', component: () => import('@/views/NotFound.vue') }
]

const router = new VueRouter({
  routes
})

export default router
