<template>
  <div class="layout" :class="classPrefix && `${classPrefix}-layout`">
    <div class="slot-wrapper" :class="classPrefix && `${classPrefix}-slot-wrapper`">
      <slot></slot>
    </div>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import NavBottom from '@/components/NavBottom.vue'

@Component({
  components: { NavBottom }
})
export default class Layout extends Vue {
  @Prop(String) classPrefix!: string
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .slot-wrapper {
    flex-grow: 1;
    overflow: hidden scroll;
  }
}
</style>