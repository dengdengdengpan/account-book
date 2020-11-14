<template>
  <div class="layout">
    <div class="slot-wrapper">
      <slot></slot>
    </div>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import NavBottom from '@/components/NavBottom.vue'

export default {
  name: 'Layout',
  components: { NavBottom }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .slot-wrapper {
    flex-grow: 1;
    overflow: hidden scroll;
  }
}
</style>