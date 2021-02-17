import { IProviderMock } from '@/services/provider.types'
import { mockArticlesService } from '@/services/articles'

export const mockProvider = (): IProviderMock => ({
  articles: mockArticlesService()
})
