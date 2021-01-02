<template>
  <h1 class="title-top">{{ title }}</h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TitleTop extends Vue {
  @Prop ({ type: String, required: true }) title!: string
}
</script>

<style lang="scss" scoped>
.title-top {
  font-size: $font-size-larger;
}
</style>