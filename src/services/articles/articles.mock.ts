import { IArticlesServiceMock } from '@/services'

export const mockArticlesService = (): IArticlesServiceMock => ({
  getAll: jest.fn(),
  getOneById: jest.fn(),
  createComment: jest.fn()
})
