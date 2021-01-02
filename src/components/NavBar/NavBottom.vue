<template>
  <nav class="nav-bottom">
    <nav-item 
      v-for="item in navList" 
      :key="item.to" 
      :to="item.to"
      :icon="item.icon"
      :name="item.name"
    />
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavItem from './NavItem.vue'

const createNavItem = (to: string, icon: string, name: string) => {
  return { to, icon, name }
}

@Component({
  components: { NavItem },
})
export default class NavBottom extends Vue {
  navList = [
    createNavItem('keep-accounts', 'keep-accounts', '记账'),
    createNavItem('statistic', 'statistic', '统计'),
    createNavItem('wealth', 'wealth', '资产'),
  ]
}
</script>

<style lang="scss" scoped>
.nav-bottom {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
}
</style>