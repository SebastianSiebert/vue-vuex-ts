import Vue from 'vue'
import { makeStore } from '@/store'
import { App, prepareStorage, router, vuetify } from './ui'
import { prepareServices } from '@/ui/plugins'

Vue.config.productionTip = false

const store = makeStore()

prepareServices(store)
prepareStorage(store)

new Vue({
  router,
  store,
  vuetify,
  render: (h): Vue.VNode => h(App)
}).$mount('#app')
