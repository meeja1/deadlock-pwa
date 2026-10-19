<script setup lang="ts">
import type { IItem } from '@/types/IItem'
import Item from '../Item.vue'
import BuildButton from './BuildButton.vue'

interface Section {
  isEdit?: boolean
  name: string
  items?: IItem[]
}

defineProps<Section>()

const emit = defineEmits<{
  up: []
  down: []
  delete: []
}>()
</script>

<template>
  <section
    class="section" :class="[isEdit && 'section--edit']"
  >
    <header class="section__header">
      <h2 class="section__title">
        {{ name }}
      </h2>
      <div v-if="isEdit" class="section__buttons">
        <BuildButton variant="arrowUp" @click="emit('up')" />
        <BuildButton variant="arrowDown" @click="emit('down')" />
        <BuildButton variant="delete" @click="emit('delete')" />
      </div>
    </header>
    <div class="section__items">
      <template v-if="items?.length">
        <Item
          v-for="{ title, type, image, id } of items"
          :key="id"
          :title
          :type
          :image
        />
      </template>
    </div>
  </section>
</template>

<style scoped>
.section {
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(105, 102, 86);
  width: 100%;

  &.section--edit {
    border-style: dashed;
  }
}
.section__title {
  margin: 0;
}

.section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(110, 102, 82);
  //padding: 5px;
}
.section__buttons {
  display: flex;
  align-items: center;
  gap: 5px;
}
.section__items {
  min-height: 100px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}
</style>
