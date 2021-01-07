<template>
  <layout-add
    layout-title="添加记账"
  >
    <template #type>
      <button-type-account></button-type-account>
    </template>
    <template #label>
      <p>测试1</p>
      <p>测试2</p>
      <p>测试3</p>
      <p>测试4</p>
      <p>测试5</p>
      <p>测试6</p>
      <p>测试7</p>
      <p>测试8</p>
      <p>测试9</p>
      <p>测试10</p>
      <p>测试11</p>
      <p>测试12</p>
      <p>测试13</p>
      <p>测试14</p>    
    </template>
    <template #action>
      <p>测试7</p>
      <p>测试8</p>
    </template>
  </layout-add>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LayoutAdd from '@/components/LayoutPage/LayoutAdd.vue'
import ButtonTypeAccount from '@/components/AccountModule/ButtonTypeAccount.vue'

@Component({
  components: { LayoutAdd, ButtonTypeAccount }
})
export default class AccountKeep extends Vue {

}
</script>

<style lang="scss" scoped>
p {
  height: 60px;
}
</style>