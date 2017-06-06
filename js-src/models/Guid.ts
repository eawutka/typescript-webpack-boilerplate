//tslint:disable:no-bitwise triple-equals

export default class Guid {
  static createNew(): Guid {
    const result = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0
      const v = c == 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
    return new Guid(result)
  }

  private _guid: string

  constructor(public guid: string) {
    this._guid = guid
  }

  toString(): string {
    return this.guid
  }
}