import { getHash } from '@/utils/getHash'

export abstract class BaseImpl {
  protected _id: string = ''

  constructor(
    protected _order: number,
    protected _name: string,
  ) {}

  protected createId(data: Record<string, unknown>) {
    this._id = getHash(data)
  };

  get order(): number {
    return this._order
  }

  set order(v: number) {
    this._order = v
  }

  get name(): string {
    return this._name
  }

  set name(v: string) {
    this._name = v
  }

  get id(): string {
    return this._id
  }
}
