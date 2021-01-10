<template>
  <div class="label-wrapper">
    <icon-display v-bind="$attrs"></icon-display>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import IconDisplay from './IconDisplay.vue'

@Component({
  components: { IconDisplay }
})
export default class LabelItem extends Vue {
  @Prop({ type: String, required: true }) label!: string
}
</script>

<style lang="scss" scoped>
.label-wrapper {
  @extend %flex-center-vertical;
  justify-content: space-between;
  height: 40px;
  margin-bottom: $spacing;
  padding: 0 3px;
  border-radius: 20px;
  background-color: #fff;

  .label {
    flex-grow: 1;
    width: 5em;
    padding: 5px 4px;
    font-size: $font-size-small;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>