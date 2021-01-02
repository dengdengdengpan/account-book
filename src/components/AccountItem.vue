<template>
  <div class="account-item">
    <icon-display v-bind="$attrs" class="icon-account-item"></icon-display>
    <div class="item-content">
      <div class="info-wrapper">
        <span class="item-name">{{ name }}</span>
        <div class="info-extra">
          <span class="item-way">{{ way }}</span>
          <span class="remarks">{{ remarks }}</span>
        </div>
      </div>
      <span class="money">{{ money }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import IconDisplay from './IconDisplay.vue'

@Component({
  components: { IconDisplay }
})
export default class AccountItem extends Vue {
  // @Prop({ type: String, required: true }) type!: string
  @Prop({ type: String, required: true }) name!: string
  @Prop({ type: String, required: true }) way!: string
  @Prop(String) remarks!: string
  @Prop({ type: String, required: true }) money!: string
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variable.scss';

.account-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-account-item {
    flex-shrink: 0;
    margin: 0 4px;
  }

  .item-content {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 0;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 200%;
      height:0;
      border-top: 1px solid $color-light;
      position: absolute;
      top: 0;
      transform: scale(0.5);
      transform-origin: top left;
    }

    .info-wrapper {
      display: flex;
      flex-direction: column;
      width: 60%;
      max-width: 200px;

      .item-name {
        font-weight: $font-weight-medium;
      }

      .info-extra {
        display: flex;
        font-size: 12px;

        .item-way {
          flex-shrink: 0;
          margin-right: $spacing;
        }

        .remarks {
          flex-grow: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    .money {
      width: 40%;
      flex-shrink: 0;
      font-size: 14px;
      font-weight: $font-weight-medium;
      text-align: right;
    }
  }
}
</style>