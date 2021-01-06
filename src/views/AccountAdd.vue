<template>
  <section class="account-add">
    <title-close title="添加记账"></title-close>
    <button-type-account></button-type-account>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TitleClose from '@/components/TitleBar/TitleClose.vue'
import ButtonTypeAccount from '@/components/AccountModule/ButtonTypeAccount.vue'

@Component({
  components: { TitleClose, ButtonTypeAccount }
})
export default class AccountKeep extends Vue {

}
</script>

<style lang="scss" scoped>
.account-add {
  height: 100vh;
  padding: 12px $spacing 0;
  background-color: $color-lighter;
}
</style>