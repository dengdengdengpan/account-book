import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './icons/index.ts'
import LayoutBase from '@/components/LayoutBase.vue'

Vue.config.productionTip = false

Vue.component('layout-base', LayoutBase)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
