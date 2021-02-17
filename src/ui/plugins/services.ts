import { IStore } from '@/store'
import { provider } from '@/services'
import Vue from 'vue'

export const prepareServices = (store: IStore): void => {
  store.$services = provider()

  Vue.mixin({
    beforeCreate () {
      this.$services = store.$services
    }
  })
}
