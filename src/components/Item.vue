<script setup lang="ts">
import type { IItem } from '../types/IItem'
import Card from 'primevue/card'
import { computed } from 'vue'

const {
  title,
  type,
  image,
} = defineProps<Omit<IItem, 'id'>>()

const itemType = computed(() => `item-card--${type}`)
</script>

<template>
  <Card :class="itemType">
    <template #header>
      <img class="item-image" :src="image" :alt="title">
    </template>
    <template #title>
      {{ title }}
    </template>
  </Card>
</template>

<style scoped>
.item-image {
  width: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 1 / 1;
}

:root {
  --text-color: #fff;
  --bg-color: #fff;
  --text-bg-color: #fff;
}

:deep(.p-card-header) {
  background-color: var(--bg-color);
  padding: 0;
}

:deep(.p-card-title) {
  text-align: center;

}

:deep(.p-card-body) {
  color: var(--text-color);
  background-color: #fff;
  width: 100%;
  padding: 5px;
  justify-content: center;
  height: 100%;
}

.p-card {
  max-width: 95px;
  gap: 0;
  border-radius: 5px;
  overflow: hidden;
}
</style>
