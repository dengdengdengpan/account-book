<template>
  <section class="layout-base" :class="classPrefix && `${classPrefix}-layout`">
    <div class="content">
      <div class="header-wrapper">
        <title-top :title="layoutTitle" class="layout-title"></title-top>
        <header-panel v-bind="$attrs"></header-panel>
      </div>
      <div class="slot-wrapper" :class="classPrefix && `${classPrefix}-slot-wrapper`">
        <slot></slot>
      </div>
    </div>
    <nav-bottom></nav-bottom>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TitleTop from '@/components/TitleBar/TitleTop.vue'
import HeaderPanel from './HeaderPanel.vue'
import NavBottom from '@/components/NavBar/NavBottom.vue'

@Component({
  components: { TitleTop, HeaderPanel, NavBottom }
})
export default class Layout extends Vue {
  @Prop(String) classPrefix!: string
  @Prop({ type: String, required: true }) layoutTitle!: string
}
</script>

<style lang="scss" scoped>
.layout-base {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;

  .content {
    flex-grow: 1;
    padding: $spacing;
    overflow: hidden scroll;
    background-color: $color-lighter;

    .header-wrapper {
      position: sticky;
      top: 0;

      .layout-title {
        margin-bottom: 10px;
      }
    }
  }
}
</style>