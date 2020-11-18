<template>
  <layout>
    <div class="account-wrapper">
      <div class="account-container">
        <div class="type">记账类型</div>
        <div class="money">记账金额</div>
        <ul class="label-list">记账标签列表</ul>
        <div class="remark">备注</div>
        <ul class="digital-panel">数字面板</ul>
      </div>
    </div>
  </layout>
</template>

<script lang="ts">
export default {
  name: 'Detail'
}
</script>

<style lang="scss" scoped>
.account-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  background-color: rgba(105, 106, 107, .2);

  .account-container {
    background-color: pink;
  }
}
</style>