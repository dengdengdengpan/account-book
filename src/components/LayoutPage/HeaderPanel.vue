<template>
  <header :style="{ backgroundImage: `url(${headerBgImage})` }">
    <title-item v-if="headerTitle" :title="headerTitle" class="header-title"></title-item>
    <div v-else>
      <button>按月统计</button>
      <button>2020-12</button>
    </div>
    <ul class="header-content">
      <li v-for="item in headerItemList" :key="item.label" class="header-item">
        <p class="item-label">{{ item.label }}</p>
        <p class="item-value">{{ item.value }}</p>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TitleItem from '@/components/TitleBar/TitleItem.vue'

@Component({
  components: { TitleItem }
})
export default class HeaderPanel extends Vue {
  @Prop(String) headerBgImage!: string
  @Prop({ type: String, required: true }) headerTitle!: string
  @Prop({ type: Array,  required: true,  default () { return [] }}) headerItemList!: Array<object>
}
</script>

<style lang="scss" scoped>
header {
  @extend %flex-column;
  margin-bottom: $spacing;
  padding: $padding;
  border-radius: $border-radius;
  background: center/contain no-repeat #fff;
  box-shadow: $box-shadow;

  .header-title {
    margin-bottom: $spacing-larger;

    ::v-deep .title {
      font-size: $font-size-large;

      &::before {
        background-color: $color-highlight;
      }
    }
  }

  .header-content {
    display: flex;
    flex-wrap: wrap;

    .header-item {
      flex-basis: 50%;
      margin-bottom: 10px;
      font-size: $font-size-small;
      font-weight: $font-weight-medium;

      &:first-child {
        .item-value {
          color: $color-highlight;
        }
      }

      &:nth-child(-n + 2) {
        .item-value {
          font-size: $font-size-medium;
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