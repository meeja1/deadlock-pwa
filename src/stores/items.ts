import type { IItem, TItemSlotType } from '@/types/IItem'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ItemsService } from '@/services/itemsServise/itemsService'

export const useItemsStore = defineStore('items', () => {
  const items = ref<IItem[]>([])

  const getItems = async () => {
    items.value = await ItemsService.getItems()
  }

  const getItemsByType = (type?: TItemSlotType) => {
    if (!type)
      return
    return items.value.filter(item => item.type === type)
  }

  return {
    items: computed(() => items.value),
    getItemsByType,
    getItems,
  }
})
