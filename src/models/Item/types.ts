import type { itemSlotType } from '@/constants/itemSlotType'

export type TItemSlotType = typeof itemSlotType[keyof typeof itemSlotType]

export interface ItemDTO {
  id: string
  name: string
  item_slot_type: TItemSlotType
  shop_image_webp: string
  shop_image: string
  shopable: boolean
}

export interface IItem {
  id: string
  title: string
  type: TItemSlotType
  image: string
}
