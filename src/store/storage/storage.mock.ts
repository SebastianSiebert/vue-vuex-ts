import { IStorageMock } from '@/store'

export const mockStorage = (): IStorageMock => ({
  getters: {
    getAllArticles: jest.fn(),
    getOneArticleById: jest.fn()
  },
  actions: {
    fetchArticles: jest.fn(),
    createComment: jest.fn()
  },
  mutations: {
    fetchArticles: jest.fn(),
    createComment: jest.fn()
  }
})
