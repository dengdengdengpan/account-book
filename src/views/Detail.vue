<template>
  <layout class-prefix="account">
    <div class="account-wrapper">
      <div class="account-content">
        <div class="type">
          <button>支出</button>
          <button>收入</button>
        </div>
        <div class="money">
          <icon-svg icon-name="rmb"></icon-svg>
          <input type="text">
        </div>
        <ul class="label-list">
          <li class="label-item" v-for="item in labelList" :key="item.icon">
            <icon-svg class="label-icon" :icon-name="item.icon"></icon-svg>
            <p class="label-name">{{ item.label }}</p>
          </li>
        </ul>
        <div class="remark">添加备注</div>
        <div class="digital-panel">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button class="button-delete">
            <icon-svg icon-name="delete"></icon-svg>
          </button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button class="button-confirm">确定</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="button-zero">0</button>
          <button class="button-decimal-point">.</button>
        </div>
      </div>
    </div>
    <p>记账记账记账记账</p>
  </layout>
</template>


<script>
import IconSvg from '@/components/IconSvg.vue'

export default {
  name: 'Detail',
  components: { IconSvg },
  data() {
    return {
      labelList: [
        { label: '服饰', icon: 'clothing' }
      ]
    }
  }
}
</script>

<style scoped>
.account-layout >>> .account-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .3);
  z-index: 100;
}
</style>

<style lang="scss" scoped>
@import '~@/styles/helper.scss';

.account-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .account-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 70%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;;
    background-color: #fff;

    .remark {
      color: #435783;
      font-size: 14px;
    }

    .digital-panel {
      @extend %clearfix;
      padding: 10px 5px 15px;
      background-color: #F6F7F9;
      $button-width: 87.5px;
      $button-height: 50px;
      $button-margin-top: 5px;
      $button-margin-right: 5px;

      > button {
        width: $button-width;
        height: $button-height;
        margin-top: $button-margin-top;
        margin-right: $button-margin-right;
        border-radius: 3px;
        background-color: #fff;
        float: left;
        font-size: 18px;
        font-weight: bold;
        vertical-align: middle;

        &:nth-child(-n + 4) {
          margin-top: 0;
        }

        &.button-delete {
          margin-right: 0;
          font-size: 28px;
        }

        &.button-confirm {
          float: right;
          height: $button-height * 3 + $button-margin-top * 2;
          margin-right: 0;
        }

        &.button-zero {
          width: $button-width * 2 + $button-margin-right;
        }
      }
    }
  }
}
</style>