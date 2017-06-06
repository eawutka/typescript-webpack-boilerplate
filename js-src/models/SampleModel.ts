import { computed, observable } from 'mobx'

import { Guid, SampleEnum } from './index'

export default class SampleModel {
  @observable id: Guid
  @observable name: string
  @observable enumProperty: SampleEnum

  // not a private field, because data transformation would happen in AppStore if you're using mobx
  @observable _data: string[]

  @computed get data(): string[] {
    return this._data.filter(x => x.length === 0)
  }

  constructor(id: Guid, name: string, enumProperty: SampleEnum = SampleEnum.FirstOption) {
    this.name = name
    this.enumProperty = enumProperty
    this._data = []

    if (id) {
      this.id = id
    } else {
      this.id = Guid.createNew()
    }
  }

  checkDataLength(): boolean {
    if (this._data.length > 5) {
      return true
    }
    return false
  }
}