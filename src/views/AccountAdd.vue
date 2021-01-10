<template>
  <layout-add
    layout-title="添加记账"
  >
    <template #type>
      <button-type-account></button-type-account>
    </template>
    <template #label>
        <label-item icon="clothing" label="衣服"></label-item>
        <label-item icon="clothing" label="吃饭吃饭吃饭吃饭"></label-item>
        <label-item icon="clothing" label="吃饭吃饭吃饭吃饭"></label-item>
        <label-item icon="clothing" label="吃饭吃饭吃饭吃饭"></label-item>
    </template>
    <template #action>
      <p>操作</p>
      <p>操作</p>
    </template>
  </layout-add>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LayoutAdd from '@/components/LayoutPage/LayoutAdd.vue'
import ButtonTypeAccount from '@/components/AccountModule/ButtonTypeAccount.vue'
import LabelItem from '@/components/IconSvg/LabelItem.vue'

@Component({
  components: { LayoutAdd, ButtonTypeAccount, LabelItem }
})
export default class AccountKeep extends Vue {

}
</script>

<style lang="scss" scoped>
p {
  height: 60px;
}
</style>