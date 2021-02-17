import { MutationTree, Store } from 'vuex'
import { IState } from '@/store/store.types'
import { IArticle, IArticleData, ICommentData } from '@/entities'

export interface IMutations extends MutationTree<IState> {
  fetchArticles (this: Store<IState>, state: IState, payload: IArticleData[]): void
  createComment (this: Store<IState>, state: IState, payload: IMutationsCreateCommentMutationPayload): void
}

export interface IMutationsMock extends IMutations {
  fetchArticles: jest.Mock<void>
  createComment: jest.Mock<void>
}

export interface IMutationsCreateCommentMutationPayload {
  article: IArticle
  comment: ICommentData
}
