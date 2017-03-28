import {observable, computed, action, useStrict} from 'mobx';

class AppStore {
    @observable private _title: string = "Hello, world"

    @computed
    get title(): string {
      return this._title
    }

    @action
    setTitle(newTitle: string): void {
      this._title = newTitle
    }
}

export default new AppStore()