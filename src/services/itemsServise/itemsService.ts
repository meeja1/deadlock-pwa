import type { IItem, ItemDTO } from '@/models/Item/types'
import { itemSlotType } from '@/constants/itemSlotType'
import { ItemImpl } from '@/models/Item/itemImpl'
import { httpService } from '@/services/httpService/httpService'

export class ItemsService {
  static async getItems(): Promise<IItem[]> {
    const [
      [weaponItems, weaponError],
      [vitalityItems, vitalityError],
      [spiritItems, spiritError],
    ] = await Promise.all(
      Object.values(itemSlotType).map(slotType =>
        httpService.get<ItemDTO[]>(`/items/by-slot-type/${slotType}`),
      ),
    )
    const errors = [weaponError, vitalityError, spiritError].filter(Boolean)
    if (errors?.length) {
      console.error(errors)
      return []
    }
    return [...weaponItems ?? '', ...vitalityItems ?? '', ...spiritItems ?? '']
      .filter(el => typeof el !== 'string' && 'shopable' in el)
      .map(el => new ItemImpl(
        el.id,
        el.name,
        el.item_slot_type,
        el.shop_image_webp || el.shop_image,
      ))
  }
}
