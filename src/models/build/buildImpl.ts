import type { IBuildSection } from '../section/types'
import type { IBuild } from './types'
import { BaseImpl } from '../base/baseImpl'
import { SectionImpl } from '../section/sectionImpl'

export class BuildImpl extends BaseImpl implements IBuild {
  constructor(
    protected _order: number,
    protected _name: string = 'new build',
    private _sections: IBuildSection[] = [new SectionImpl(
      'new section',
      [],
      0,
    )],
    protected _isEdit: boolean = true,
  ) {
    super(_order, _name)
    super.createId({
      name: this._name,
      sections: this._sections,
    })
  }

  public get name(): string {
    return this._name
  }

  public get sections(): IBuildSection[] {
    return this._sections
  }

  public set sections(v: IBuildSection[]) {
    this._sections = v
  }

  public get isEdit() {
    return this._isEdit
  }

  public set isEdit(v: boolean) {
    this._isEdit = v
  }
}
