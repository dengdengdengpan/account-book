<template>
  <header :style="{ backgroundImage: `url(${bgImage})` }">
    <h3 v-if="title" class="header-title">{{ title }}</h3>
    <div v-else>
      <button>按月统计</button>
      <button>2020-12</button>
    </div>
    <ul class="header-content">
      <li v-for="item in itemList" :key="item.label" class="header-item">
        <p class="item-label">{{ item.label }}</p>
        <p class="item-value">{{ item.value }}</p>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HeaderBar extends Vue {
  @Prop(String) bgImage!: string
  @Prop({ type: String, required: true }) title!: string
  @Prop({ type: Array,  required: true,  default () { return [] }}) itemList!: Array<object>
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variable.scss';

header {
  display: flex;
  flex-direction: column;
  margin-bottom: $spacing;
  padding: 8px 12px;
  border-radius: $border-radius;
  background: #fff center/contain no-repeat;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);

  .header-title {
    margin-bottom: $spacing;
    font-size: 20px;
    line-height: 1;
    &::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 1em;
      margin-right: 5px;
      background-color: $color-highlight;
      vertical-align: top;
    }
  }

  .header-content {
    display: flex;
    flex-wrap: wrap;

    .header-item {
      flex-basis: 50%;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: $font-weight-medium;

      &:first-child {
        .item-value {
          color: $color-highlight;
        }
      }

      &:nth-child(-n + 2) {
        .item-value {
          font-size: 18px;
        }
      }

      &:last-child {
        flex-basis: 100%;
        display: flex;
        margin-bottom: 0;

        .item-label {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>