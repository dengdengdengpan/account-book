<template>
  <div class="tag-list">
    <tag-item v-for="item in data" :key="item.tag" :icon="item.icon" :tag="item.tag"></tag-item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TagItem from './TagItem.vue'

@Component({
  components: { TagItem }
})
export default class TagList extends Vue {
  @Prop({ type: Array, required: true }) data!: object[]
}
</script>

<style lang="scss" scoped>
.tag-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing;
  align-content: flex-start;
  height: 100%;
}
</style>