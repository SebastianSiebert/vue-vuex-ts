import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { IState } from '@/store/store.types'
import { actions } from '@/store/actions'
import { mutations } from '@/store/mutations'
import { getters } from '@/store/getters'

Vue.use(Vuex)

export const makeStore = (): Store<IState> => new Vuex.Store<IState>({
  state: {
    articles: [],
    version: 1
  },
  actions,
  mutations,
  getters
})
