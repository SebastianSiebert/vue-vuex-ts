import { IProvider } from '@/services/provider.types'
import data from './data.json'
import { ArticlesService } from '@/services/articles'

export const provider = (): IProvider => ({
  articles: new ArticlesService(data)
})
