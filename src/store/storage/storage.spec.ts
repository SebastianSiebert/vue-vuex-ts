import { makeStorage } from '@/store/storage'
import { mockStore } from '@/store/store.mock'
import { mockArticles } from '@/entities'
import { mockCreateCommentActionPayload } from '@/store/actions/actions.mock'
import { mockCreateCommentMutationPayload } from '@/store/mutations/mutations.mock'

describe('>>> Storage', () => {
  const store = mockStore()
  const storage = makeStorage(store)

  describe('>> Getters', () => {
    it('should proxy getAllArticles', () => {
      expect(storage.getters.getAllArticles()).toBe(store.getters.getAllArticles)
    })

    it('should proxy getOneArticleById', () => {
      const id = 111
      const result = storage.getters.getOneArticleById(id)
      expect(store.getters.getOneArticleById).toBeCalledWith(id)
      expect(result).toBe(store.getters.getOneArticleById(id))
    })
  })

  describe('>> Actions', () => {
    it('should proxy fetchArticles', () => {
      storage.actions.fetchArticles()
      expect(store.dispatch).toBeCalledWith('fetchArticles')
    })

    it('should proxy createComment', () => {
      const payload = mockCreateCommentActionPayload()
      storage.actions.createComment(payload)
      expect(store.dispatch).toBeCalledWith('createComment', payload)
    })
  })

  describe('>> Mutations', () => {
    it('should proxy fetchArticles', () => {
      const payload = mockArticles()
      storage.mutations.fetchArticles(payload)
      expect(store.commit).toBeCalledWith('fetchArticles', payload)
    })

    it('should proxy createComment', () => {
      const payload = mockCreateCommentMutationPayload()
      storage.mutations.createComment(payload)
      expect(store.commit).toBeCalledWith('createComment', payload)
    })
  })
})
