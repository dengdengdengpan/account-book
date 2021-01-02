<template>
  <div class="layout-base" :class="classPrefix && `${classPrefix}-layout`">
    <div class="content">
      <div class="header-wrapper">
        <h1 class="layout-title">{{ layoutTitle }}</h1>
        <header-panel v-bind="$attrs"></header-panel>
      </div>
      <div class="slot-wrapper" :class="classPrefix && `${classPrefix}-slot-wrapper`">
        <slot></slot>
      </div>
    </div>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import HeaderPanel from './HeaderPanel.vue'
import NavBottom from '@/components/NavBar/NavBottom.vue'

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

.layout-base {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;

  .content {
    flex-grow: 1;
    padding: 8px;
    overflow: hidden scroll;
    background-color: $color-light;

    .header-wrapper {
      position: sticky;
      top: 0;
    }

    .layout-title {
      margin-bottom: 10px;
      font-size: 24px;
    }
  }
}
</style>