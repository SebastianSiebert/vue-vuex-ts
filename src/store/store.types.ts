import { IArticleData } from '@/entities'
import { Store } from 'vuex'
import { IActionsMock } from '@/store/actions'
import { IMutationsMock } from '@/store/mutations'
import { IGettersMock } from '@/store/getters'
import { IProviderMock } from '@/services'
import { IStorage } from '@/store/storage'

export interface IRootState {
  version: number
}

export interface IState extends IRootState {
  articles: IArticleData[]
}

export type IStore = Store<IState>

export interface IStoreMock extends IStore {
  $storage: IStorage
  $services: IProviderMock
  state: IState
  actions: IActionsMock
  mutations: IMutationsMock
  getters: IGettersMock
}
