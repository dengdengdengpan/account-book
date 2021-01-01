<template>
  <div class="title-item">
    <h3 class="title">{{ title }}</h3>
    <div v-if="income" class="account-total">
      <span class="income">+{{ income }}</span>
      <span class="expense">-{{ expense }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TitleItem extends Vue {
  @Prop ({ type: String, required: true }) title!: string
  @Prop (String) income!: string
  @Prop (String) expense!: string
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variable.scss';

.title-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    flex-shrink: 0;
    font-size: 16px;
    line-height: 1;

    &::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 1em;
      margin-right: 5px;
      background-color: $color-ornament;
      vertical-align: top;
    }
  }

  .account-total {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    font-weight: $font-weight-medium;
    line-height: 1;

    .expense {
      margin-left: 8px;
      color: $color-highlight;
    }
  }
}
</style>