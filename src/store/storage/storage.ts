import { ICreateCommentActionPayload, IMutationsCreateCommentMutationPayload, IStorage, IStore } from '@/store'
import { IArticle, IArticleData } from '@/entities'

export const makeStorage = (store: IStore): IStorage => ({
  getters: {
    getAllArticles (): IArticle[] {
      return store.getters.getAllArticles
    },

    getOneArticleById (id: number): IArticle | undefined {
      return store.getters.getOneArticleById(id)
    }
  },

  actions: {
    fetchArticles (): void {
      store.dispatch('fetchArticles')
    },

    createComment (payload: ICreateCommentActionPayload): void {
      store.dispatch('createComment', payload)
    }
  },

  mutations: {
    fetchArticles (payload: IArticleData[]): void {
      store.commit('fetchArticles', payload)
    },
    createComment (payload: IMutationsCreateCommentMutationPayload): void {
      store.commit('createComment', payload)
    }
  }
})
