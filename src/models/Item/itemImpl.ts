import type { IItem, TItemSlotType } from '@/models/Item/types'

export class ItemImpl implements IItem {
  constructor(
    private _id: string,
    private _title: string,
    private _type: TItemSlotType,
    private _image: string,
  ) { }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }

  get type() {
    return this._type
  }

  get image() {
    return this._image
  }
}
