import {
  LoadArticlesByCategoryRepository,
  LoadArticlesByTermRepository,
  LoadArticlesRepository,
} from '@/data/protocols'
import prisma from '@/infra/db/mysql/client'

export class ArticleMysqlRepository
  implements
    LoadArticlesRepository,
    LoadArticlesByCategoryRepository,
    LoadArticlesByTermRepository
{
  async load(): Promise<LoadArticlesRepository.Result> {
    let articles = await prisma.article.findMany({
      orderBy: {
        date: 'desc',
      },
    })
    return articles as LoadArticlesRepository.Result
  }

  async loadByCategory(
    category: string
  ): Promise<LoadArticlesByCategoryRepository.Result> {
    let articles = await prisma.article.findMany({
      where: {
        category,
      },
      orderBy: {
        date: 'desc',
      },
    })
    return articles as unknown as LoadArticlesByCategoryRepository.Result
  }

  async loadByTerm(term: string): Promise<LoadArticlesByTermRepository.Result> {
    return await Promise.resolve([])
  }
}
