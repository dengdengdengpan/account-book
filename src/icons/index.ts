import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

Vue.component('SvgIcon', SvgIcon)

const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext)
}
requireAll(require.context('./svg', false, /\.svg$/))