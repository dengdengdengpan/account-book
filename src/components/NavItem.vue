<template>
  <router-link :to="`/${to}`" active-class="nav-selected" class="nav-item">
    <svg-icon :icon-name="icon" class="nav-icon"></svg-icon>
    <span class="nav-name">{{ name }}</span>
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class NavItem extends Vue {
  @Prop({ type: String, required: true }) to!: string
  @Prop({ type: String, required: true }) icon!: string
  @Prop({ type: String, required: true }) name!: string
}
</script>

<style lang="scss" scoped>
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
</style>