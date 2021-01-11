<template>
  <layout-add
    layout-title="添加记账"
  >
    <template #type>
      <button-type-account></button-type-account>
    </template>
    <template #label>
        <tag-list :data="tagList"></tag-list>
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
import TagList from '@/components/Tag/TagList.vue'

@Component({
  components: { LayoutAdd, ButtonTypeAccount, TagList }
})
export default class AccountKeep extends Vue {
  tagList = [
    { icon: 'clothing', tag: '衣服' },
    { icon: 'clothing', tag: '吃饭' },
    { icon: 'clothing', tag: '公交车' },
    { icon: 'clothing', tag: '地铁' }
  ]
  selectLabel (event: Touch) {
    console.log(event)
  }
}
</script>

<style lang="scss" scoped>
p {
  height: 60px;
}
</style>