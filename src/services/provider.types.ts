import { IArticlesService, IArticlesServiceMock } from '@/services/articles'

export interface IProvider {
  articles: IArticlesService
}

export interface IProviderMock {
  articles: IArticlesServiceMock
}
