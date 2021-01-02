<template>
  <div class="account-list">
    <title-item title="2021-01-01" income="9000887766" expense="120000000000000" class="header-account-list"></title-item>
    <account-item v-bind="$attrs"></account-item>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TitleItem from './TitelItem.vue'
import AccountItem from './AccountItem.vue'

@Component({
  components: { TitleItem, AccountItem }
})
export default class AccountList extends Vue {
  //
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variable.scss';

.account-list {
  padding: $padding;
  border-radius: $border-radius;
  background-color: #fff;
  box-shadow: $box-shadow;

  .header-account-list {
    padding: $spacing 0;
  }
}
</style>