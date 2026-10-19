import type { IItem } from '@/types/IItem'

export interface TSectionItem extends IItem {
  order: number
}

export interface IBuildSection {
  id: string
  name: string
  order: number
  items: TSectionItem[]
}
