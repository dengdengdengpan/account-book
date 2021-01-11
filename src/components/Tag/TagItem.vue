<template>
  <div class="tag-wrapper" @touchstart="$emit('select', $event)">
    <icon-display v-bind="$attrs" class="icon-tag"></icon-display>
    <span class="tag">{{ tag }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import IconDisplay from '@/components/IconSvg/IconDisplay.vue'

@Component({
  components: { IconDisplay }
})
export default class LabelItem extends Vue {
  @Prop({ type: String, required: true }) tag!: string
}
</script>

<style lang="scss" scoped>
.tag-wrapper {
  @extend %flex-center-vertical;
  justify-content: space-between;
  height: 40px;
  padding: 0 3px;
  border-radius: 20px;
  background-color: #fff;

  .tag {
    flex-grow: 1;
    width: 5em;
    padding: 5px 4px;
    font-size: $font-size-small;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &.selected {
    .icon-tag {
      background-color: $color-highlight;
      color: #fff;
    }

    .tag {
      color: $color-highlight;
    }
  }
}
</style>