<template>
  <svg class="icon-svg" aria-hidden="true">
    <use :xlink:href="`#${iconName}`"></use>
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class IconSvg extends Vue {
  @Prop({ type: String, required: true }) iconName!: string
}
</script>

<style lang="scss" scoped>
.icon-svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>