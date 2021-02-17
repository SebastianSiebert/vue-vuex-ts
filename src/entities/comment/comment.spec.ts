import { Comment } from '@/entities/comment/comment'
import { mockComments, mockCommentsData } from '@/entities'

describe('>>> Comment', () => {
  describe('>> constructor', () => {
    it('should instantiate id only if it was provided', () => {
      const entity1 = new Comment({
        ...mockCommentsData()[0],
        id: 1
      })

      expect(entity1.id).toBe(1)

      const entity2 = new Comment({
        ...mockCommentsData()[0],
        id: undefined
      })

      expect(entity2.id).toBeUndefined()
    })

    it('should instantiate createdAt only if it was provided', () => {
      const entity1 = new Comment({
        ...mockCommentsData()[0],
        createdAt: '2019-12-19T11:54:04 +05:00'
      })

      expect(entity1.createdAt).toBe('2019-12-19T11:54:04 +05:00')

      const entity2 = new Comment({
        ...mockCommentsData()[0],
        createdAt: undefined
      })

      expect(entity2.createdAt).toBeUndefined()
    })
  })

  describe('>> validate', () => {
    it('should fail validation if title is empty', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        title: ''
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should fail validation if title is too long', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should fail validation if author name is empty', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        author: ''
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should fail validation if author name is too long', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        author: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should fail validation if content is empty', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        content: ''
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should fail validation if content is too long', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis viverra ligula. Nam ullamcorper lectus id enim dapibus sagittis. Cras eu nulla lacinia, lobortis elit at, ultricies nisi. Nulla lacinia massa scelerisque rhoncus viverra. Mauris ipsum lorem, cursus ultricies est vitae, convallis duis.'
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should return true if entity is valid', () => {
      const entity = mockComments()[0]
      expect(entity.validate()).toBeTruthy()
    })
  })
})
