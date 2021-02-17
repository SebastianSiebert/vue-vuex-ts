import { IGetters, IState } from '@/store'
import { Article, IArticle } from '@/entities'

export const getters: IGetters = {
  getAllArticles (state: IState): IArticle[] {
    return state.articles.map(data => new Article(data))
  },

  getOneArticleById: (state: IState) => (id: number): IArticle | undefined => {
    const data = state.articles.find(article => article.id === id)
    if (!data) {
      return
    }

    return new Article(data)
  }
}
