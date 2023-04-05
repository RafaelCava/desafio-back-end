import {
  LoadArticlesByCategoryRepository,
  LoadArticlesRepository,
} from '@/data/protocols'
import prisma from '@/infra/db/prisma/client'

export class ArticleMysqlRepository
  implements LoadArticlesRepository, LoadArticlesByCategoryRepository
{
  async load(): Promise<LoadArticlesRepository.Result> {
    let articles = await prisma.article.findMany({
      orderBy: {
        date: 'desc',
      },
    })
    if (!articles) {
      return []
    }
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
    if (!articles) {
      return []
    }
    return articles as unknown as LoadArticlesByCategoryRepository.Result
  }
}
