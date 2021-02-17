import { IArticle, IArticleData } from '@/entities'
import { ICreateCommentActionPayload, IMutationsCreateCommentMutationPayload } from '@/store'

export interface IStorage {
  getters: {
    getAllArticles (): IArticle[]
    getOneArticleById (id: number): IArticle | undefined
  }

  actions: {
    fetchArticles (): void
    createComment (payload: ICreateCommentActionPayload): void
  }

  mutations: {
    fetchArticles (payload: IArticleData[]): void
    createComment (payload: IMutationsCreateCommentMutationPayload): void
  }
}

export interface IStorageMock extends IStorage {
  getters: {
    getAllArticles: jest.Mock<IArticle[]>
    getOneArticleById: jest.Mock<IArticle | undefined>
  }

  actions: {
    fetchArticles: jest.Mock<void>
    createComment: jest.Mock<void>
  }

  mutations: {
    fetchArticles: jest.Mock<void>
    createComment: jest.Mock<void>
  }
}
