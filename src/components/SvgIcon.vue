<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#${iconName}`"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>