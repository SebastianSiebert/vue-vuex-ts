import { IMutationsMock, IMutationsCreateCommentMutationPayload } from '@/store/mutations/mutations.types'
import { mockArticles, mockCommentsData } from '@/entities'

export const mockMutations = (): IMutationsMock => ({
  fetchArticles: jest.fn(),
  createComment: jest.fn()
})

export const mockCreateCommentMutationPayload = (article = mockArticles()[0], comment = mockCommentsData()[0]): IMutationsCreateCommentMutationPayload => ({
  article,
  comment
})
