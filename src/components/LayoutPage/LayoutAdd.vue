<template>
  <section class="layout-add">
    <div class="title-wrapper">
      <title-close :title="layoutTitle"></title-close>
      <slot name="type"></slot>
    </div>
    <div class="content">
      <slot name="label"></slot>
    </div>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TitleClose from '@/components/TitleBar/TitleClose.vue'

@Component({
  components: { TitleClose }
})
export default class LayoutAdd extends Vue {
  @Prop({ type: String, required: true }) layoutTitle!: string
}
</script>

<style lang="scss" scoped>
.layout-add {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: $color-lighter;

  .title-wrapper {
    padding: 12px $spacing 6px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color: #fff;
    box-shadow: $box-shadow;
  }

  .content {
    flex-grow: 1;
    padding: $spacing;
    overflow: hidden scroll;
  }

  .action-wrapper {
    padding-right: $spacing;
    padding-left: $spacing;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    background-color: #fff;
    box-shadow: $box-shadow;
  }
}
</style>