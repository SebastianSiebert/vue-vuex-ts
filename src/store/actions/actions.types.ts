import { ActionContext, ActionTree, Store } from 'vuex'
import { IRootState, IState } from '@/store'
import { ICommentData } from '@/entities'

export type Context = ActionContext<IState, IRootState>

export interface ICreateCommentActionPayload {
  articleId: number
  comment: ICommentData
}

export interface IActions extends ActionTree<IState, IState>{
  fetchArticles (this: Store<IState>, context: Context): void
  createComment (this: Store<IState>, context: Context, payload: ICreateCommentActionPayload): void
}

export interface IActionsMock extends IActions {
  fetchArticles: jest.Mock<void>
  createComment: jest.Mock<void>
}
