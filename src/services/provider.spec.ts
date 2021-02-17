import { provider } from '@/services/provider'
import { ArticlesService } from '@/services/articles'

jest.mock('./articles')
describe('>> Provider', () => {
  it('should instantiate Articles Service', () => {
    provider()
    expect(ArticlesService.prototype.constructor).toBeCalled()
  })
})
