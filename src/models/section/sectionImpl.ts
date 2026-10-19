import type { IBuildSection } from './types'
import { BaseImpl } from '@/models/base/baseImpl'

export class SectionImpl extends BaseImpl implements IBuildSection {
  constructor(
    protected _name: IBuildSection['name'],
    private _items: IBuildSection['items'],
    protected _order: IBuildSection['order'],
  ) {
    super(_order, _name)

    this.createId({
      name: this._name,
      order: this._order,
      items: this._items,
    })
  }

  get items() {
    return this._items
  }
}
