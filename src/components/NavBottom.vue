<template>
  <nav class="nav-bottom">
    <router-link to="/label">标签</router-link> |
    <router-link to="/money">记账</router-link> |
    <router-link to="/statistic">统计</router-link>
  </nav>
</template>

<script lang="ts">
import detailSvg from '@/icons/detail.svg'
console.log('detailSvg', detailSvg)

export default {
  name: 'NavBottom'
}
</script>