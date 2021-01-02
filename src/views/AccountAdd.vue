<template>
  <layout-add layout-title="添加记账">
    <template #type>
      <button-account-type></button-account-type>
    </template>
  </layout-add>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LayoutAdd from '@/components/LayoutPage/LayoutAdd.vue'
import AccountType from '@/components/AccountModule/ButtonAccountType.vue'

@Component({
  components: { LayoutAdd, AccountType }
})
export default class AccountKeep extends Vue {

}
</script>