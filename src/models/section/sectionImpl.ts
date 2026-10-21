import type { IBuildSection } from './types'
import { BaseImpl } from '@/models/base/baseImpl'

export class SectionImpl extends BaseImpl implements IBuildSection {
  constructor(
    protected _name: IBuildSection['name'],
    private _items: IBuildSection['items'],
    protected _order: IBuildSection['order'],
  ) {
    super(_order, _name)

    super.createId({
      name: _name,
      order: _order,
      items: _items,
    })
  }

  public get items() {
    return this._items
  }
}
