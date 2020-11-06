import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import LayoutPage from '@/components/LayoutPage.vue'

Vue.config.productionTip = false

Vue.component('LayoutPage', LayoutPage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
