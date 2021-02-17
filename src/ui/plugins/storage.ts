import { IStore, makeStorage } from '@/store'
import Vue from 'vue'

export const prepareStorage = (store: IStore): void => {
  store.$storage = makeStorage(store)

  Vue.mixin({
    beforeCreate () {
      this.$storage = store.$storage
    }
  })
}
