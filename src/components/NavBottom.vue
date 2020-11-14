<template>
  <nav class="nav-bottom">
    <router-link to="/label" active-class="nav-selected" class="nav-item">
      <svg-icon icon-name="label" class="nav-icon"></svg-icon>
      <span class="nav-name">标签</span>
    </router-link>
    <router-link to="/detail" active-class="nav-selected" class="nav-item">
      <svg-icon icon-name="detail" class="nav-icon"></svg-icon>
      <span class="nav-name">明细</span>     
    </router-link>
    <router-link to="/statistic" active-class="nav-selected" class="nav-item">
      <svg-icon icon-name="statistic" class="nav-icon"></svg-icon>
      <span class="nav-name">统计</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import SvgIcon from './SvgIcon.vue'
export default {
  components: { SvgIcon },
  name: 'NavBottom'
}
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