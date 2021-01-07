<template>
  <div class="account-type-wrapper">
    <button class="account-type selected">支出</button>
    <button class="account-type">收入</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ButtonTypeAccount extends Vue {}
</script>

<style lang="scss" scoped>
.account-type-wrapper {
  .account-type {
    position: relative;
    padding: .3em 0;
    background-color: #fff;
    font-weight: $font-weight-medium;

    &:first-child {
      margin-right: 15px;
    }

    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: $color-highlight;
    }
  }
}
</style>