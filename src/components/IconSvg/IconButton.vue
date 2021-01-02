<template>
  <div class="icon-button-wrapper" @touchstart="$emit('xxx')">
    <icon-svg :icon-name="icon" class="icon-button"></icon-svg>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class IconButton extends Vue {
  @Prop({ type: String, default: 'add' }) icon!: string
}
</script>

<style lang="scss" scoped>
.icon-button-wrapper {
  @extend %flex-center;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: $color-highlight;
  position: fixed;
  right: 10px;
  bottom: 80px;
  box-shadow: $box-shadow;

  .icon-button {
    width: 1.5em;
    height: 1.5em;
    fill: #fff;
  }
}
</style>