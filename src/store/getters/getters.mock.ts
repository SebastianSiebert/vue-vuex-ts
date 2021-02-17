import { IGettersMock } from '@/store/getters'

export const mockGetters = (): IGettersMock => ({
  getAllArticles: jest.fn(),
  getOneArticleById: jest.fn()
})
