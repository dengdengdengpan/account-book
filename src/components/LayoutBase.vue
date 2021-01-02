<template>
  <div class="layout" :class="classPrefix && `${classPrefix}-layout`">
    <section class="content">
      <h1 class="layout-title">{{ layoutTitle }}</h1>
      <header-panel v-bind="$attrs"></header-panel>
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
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variable.scss';

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    flex-grow: 1;
    padding: 8px;
    overflow: hidden scroll;
    background-color: $color-light;

    .layout-title {
      margin-bottom: 10px;
      font-size: 24px;
    }
  }
}
</style>