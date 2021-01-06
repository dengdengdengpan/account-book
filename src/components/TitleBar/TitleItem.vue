<template>
  <div class="title-item">
    <h3 class="title">{{ title }}</h3>
    <div v-if="income || expense" class="account-total">
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
.title-item {
  @extend %flex-center-vertical;
  justify-content: space-between;

  .title {
    flex-shrink: 0;
    line-height: 1;

    &::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 1em;
      margin-right: 5px;
      background-color: $color-light;
      vertical-align: top;
    }
  }

  .account-total {
    flex-grow: 1;
    @extend %flex-center-vertical;
    justify-content: flex-end;
    font-size: $font-size-small;
    font-weight: $font-weight-medium;
    line-height: 1;

    .expense {
      margin-left: 8px;
      color: $color-highlight;
    }
  }
}
</style>