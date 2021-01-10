<template>
  <div class="icon-display-wrapper">
    <icon-svg v-bind="$attrs" class="icon-display"></icon-svg>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class IconDisplay extends Vue {}
</script>

<style lang="scss" scoped>
.icon-display-wrapper {
  @extend %flex-center;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: $color-lighter;

  .icon-display {
    width: 1.5em;
    height: 1.5em;
  }
}
</style>