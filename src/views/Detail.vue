<template>
  <layout class-prefix="account">
    <div class="account-wrapper">
      <div class="account-content">
        <div class="type">记账类型</div>
        <div class="money">记账金额</div>
        <ul class="label-list">记账标签列表</ul>
        <div class="remark">备注</div>
        <ul class="digital-panel">数字面板</ul>
      </div>
    </div>
  </layout>
</template>


<script>
export default {
  name: 'Detail'
}
</script>

<style scoped>
.account-layout >>> .account-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .4);
  z-index: 100;
}
</style>

<style lang="scss" scoped>

</style>