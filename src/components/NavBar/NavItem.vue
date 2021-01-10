<template>
  <router-link :to="`/${to}`" active-class="nav-selected" class="nav-item">
    <icon-svg :icon="icon" class="nav-icon"></icon-svg>
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
  @extend %flex-center-vertical;
  flex-grow: 1;
  flex-direction: column;
  padding-top: 5px;
  padding-bottom: 3px;

  &.nav-selected {
    color: $color-highlight;
  }

  .nav-icon {
    width: 2em;
    height: 2em;
  }

  .nav-name {
    font-size: $font-size-mini;
  }
}
</style>