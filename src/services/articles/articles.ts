import { IArticlesService } from '@/services'
import { Article, Comment, IArticle, IArticleData, ICommentData } from '@/entities'

export class ArticlesService implements IArticlesService {
  constructor (private readonly data: IArticleData[]) {}

  getAll (): IArticleData[] {
    return this.data
  }

  getOneById (id: number): IArticle | undefined {
    const data = this.data.find(article => article.id === id)
    if (!data) {
      return undefined
    }
    return new Article(data)
  }

  createComment (articleId: number, commentData: ICommentData): IArticle {
    const article = this.getOneById(articleId)
    if (!article) {
      throw new Error('Article doesn\'t exist in DB!')
    }

    const comment = new Comment(commentData)
    if (!comment.validate()) {
      throw new Error('Comment data is not valid')
    }

    article.comments.push(comment)

    return article
  }
}
