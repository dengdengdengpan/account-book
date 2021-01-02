<template>
  <layout-base
    layout-title="记账" 
    header-title="本月概览" 
    :header-item-list="headerItemList"
    :header-bg-image="headerBgAccount"
  >
    <p>测试测试</p>
    <p>测试测试</p>
    <p>测试测试</p>
    <p>测试测试</p>
    <p>测试测试</p>
    <p>测试测试</p>
    <p>测试测试</p>
    <icon-button @xxx="xxx"></icon-button>
  </layout-base>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import headerBgAccount from '@/assets/header-bg-1.png'
// import AccountList from '@/components/AccountList.vue'
import IconButton from '@/components/IconSvg/IconButton.vue'

@Component({
  components: { IconButton }
})
export default class KeepAccounts extends Vue {
  headerItemList = [
    { label: '支出', value: '4450145287258' },
    { label: '收入', value: '4054210' },
    { label: '结余', value: '-8014450' }
  ]
  headerBgAccount = headerBgAccount
  xxx () {
    this.$router.push('/add')
  }
}
</script>