import { getHash } from '@/utils/getHash'

export abstract class BaseImpl {
  protected _id: string = ''

  protected constructor(
    protected _order: number,
    protected _name: string,
  ) {}

  protected createId(data: Record<string, unknown>) {
    this._id = getHash(data)
  };

  public get order(): number {
    return this._order
  }

  public set order(v: number) {
    this._order = v
  }

  public get name(): string {
    return this._name
  }

  public set name(v: string) {
    this._name = v
  }

  public get id(): string {
    return this._id
  }
}
