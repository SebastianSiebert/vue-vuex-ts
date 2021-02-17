import { ActionContext } from 'vuex'
import { IActionsMock, ICreateCommentActionPayload, IRootState, IState, mockGetters } from '@/store'
import { mockRootState, mockState } from '@/store/store.mock'
import { mockComments } from '@/entities'

export const mockActionsContext = (): ActionContext<IState, IRootState> => ({
  commit: jest.fn(),
  dispatch: jest.fn(),
  state: mockState(),
  getters: mockGetters(),
  rootState: mockRootState(),
  rootGetters: {}
})

export const mockCreateCommentActionPayload = (articleId = 0, comment = mockComments()[0]): ICreateCommentActionPayload => ({
  articleId,
  comment
})

export const mockActions = (): IActionsMock => ({
  fetchArticles: jest.fn(),
  createComment: jest.fn()
})
