<template>
  <header class="title-close">
    <title-top v-bind="$attrs"></title-top>
    <icon-svg icon="close" class="icon-layout-add"></icon-svg>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TitleTop from './TitleTop.vue'

@Component({
  components: { TitleTop }
})
export default class TitleClose extends Vue {}
</script>

<style lang="scss" scoped>
.title-close {
  @extend %flex-center-vertical;
  justify-content: space-between;
  margin-bottom: $spacing;

  .icon-layout-add {
    font-size: $font-size-larger;
  }
}
</style>