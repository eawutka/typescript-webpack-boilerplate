import { action, computed, observable, useStrict } from 'mobx'

import { Guid, SampleEnum, SampleModel } from './models'
import { ISampleInterface } from './interfaces'
import { NaturalSort } from './lib'

useStrict(true)

class AppStore {
  @observable private _title: string = 'Hello, world'

  @computed
  get title(): string {
    return this._title
  }

  @action
  setTitle(newTitle: string) {
    this._title = newTitle
  }
}

// exports a singleton that can be imported and used easily
export default new AppStore()