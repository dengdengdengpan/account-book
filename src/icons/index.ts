import Vue from 'vue'
import IconSvg from '@/components/IconSvg/IconSvg.vue'

Vue.component('icon-svg', IconSvg)

const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext)
}
requireAll(require.context('./svg', false, /\.svg$/))