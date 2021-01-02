<template>
  <div class="layout-add">
    <header>
      <div class="title-wrapper">
        <title-top :title="layoutTitle"></title-top>
        <icon-svg icon-name="close" class="icon-layout-add"></icon-svg>
      </div>
      <slot name="type"></slot>
    </header>
    <main>
      <slot name="tag"></slot>
    </main>
    <footer>
      <slot name="money"></slot>
      <slot name="account"></slot>
      <slot name="numberPad"></slot>
      <slot name="wealth"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TitleTop from '@/components/TitleBar/TitleTop.vue'

@Component({
  components: { TitleTop }
})
export default class LayoutAdd extends Vue {
  @Prop({ type: String, required: true }) layoutTitle!: string
}
</script>

<style lang="scss" scoped>
.layout-add {
  height: 100vh;
  background-color: $color-light;

  header {
    padding: 12px $spacing 6px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color: #fff;
    box-shadow: $box-shadow;

    .title-wrapper {
      @extend %flex-center-vertical;
      justify-content: space-between;
      margin-bottom: $spacing;

      .icon-layout-add {
        font-size: $font-size-larger;
      }
    }
  }
}
</style>