<template>
  <nav class="nav-bottom">
    <router-link to="/keep-accounts" active-class="nav-selected" class="nav-item">
      <svg-icon icon-name="detail" class="nav-icon"></svg-icon>
      <span class="nav-name">记账</span>     
    </router-link>
    <router-link to="/statistic" active-class="nav-selected" class="nav-item">
      <svg-icon icon-name="statistic" class="nav-icon"></svg-icon>
      <span class="nav-name">统计</span>
    </router-link>
    <router-link to="/label" active-class="nav-selected" class="nav-item">
      <svg-icon icon-name="label" class="nav-icon"></svg-icon>
      <span class="nav-name">资产</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SvgIcon from './SvgIcon.vue'

@Component({
  components: { SvgIcon }
})
export default class NavBottom extends Vue {}
</script>

<style lang="scss" scoped>
.nav-bottom {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);

  .nav-item {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3px;
    padding-bottom: 3px;

    &.nav-selected {
      color: red;
    }

    .nav-icon {
      width: 32px;
      height: 32px;
    }

    .nav-name {
      font-size: 12px;
      line-height: 1.5;
    }
  }
}
</style>