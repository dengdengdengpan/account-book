<template>
  <div class="layout" :class="classPrefix && `${classPrefix}-layout`">
    <section class="content">
      <h1 class="layout-title">{{ layoutTitle }}</h1>
      <header-panel :title="headerTitle" :item-list="headerItemList" :bg-image="headerBgImage"></header-panel>
      <div class="slot-wrapper" :class="classPrefix && `${classPrefix}-slot-wrapper`">
        <slot></slot>
      </div>
    </section>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import HeaderPanel from './HeaderPanel.vue'
import NavBottom from './NavBottom.vue'

@Component({
  components: { HeaderPanel, NavBottom }
})
export default class Layout extends Vue {
  @Prop(String) classPrefix!: string
  @Prop({ type: String, required: true }) layoutTitle!: string
  @Prop({ type: String, required: true }) headerTitle!: string
  @Prop(String) headerBgImage!: string
  @Prop({ type: Array,  required: true,  default () { return [] }}) headerItemList!: Array<object>
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    flex-grow: 1;
    padding: 8px;
    overflow: hidden scroll;
    background-color: #f3f4f8;

    .layout-title {
      margin-bottom: 10px;
      font-size: 24px;
    }
  }
}
</style>