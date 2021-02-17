import { GetterTree, Store } from 'vuex'
import { IRootState, IState } from '@/store'
import { IArticle } from '@/entities'

export interface IGetters extends GetterTree<IState, IRootState> {
  getAllArticles (this: Store<IState>, state: IState): IArticle[]
  getOneArticleById (this: Store<IState>, state: IState): (id: number) => IArticle | undefined
}

export interface IGettersMock {
  getAllArticles: jest.Mock<IArticle[]>
  getOneArticleById: jest.Mock<(id: number) => IArticle | undefined>
}
