<template>
  <div class="account-type-wrapper">
    <button class="account-type">支出</button>
    <button class="account-type">收入</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ButtonAccountType extends Vue {
  //
}
</script>

<style lang="scss" scoped>
.account-type-wrapper {
  background-color: pink;

  .account-type {
    padding: .3em 0;
    background-color: #fff;
    font-weight: $font-weight-medium;

    &:first-child {
      margin-right: 15px;
    }
  }
}
</style>