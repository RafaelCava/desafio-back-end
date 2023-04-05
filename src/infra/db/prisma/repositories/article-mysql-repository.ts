import { LoadArticlesRepository } from '@/data/protocols'
import prisma from '@/infra/db/prisma/client'

export class ArticleMysqlRepository implements LoadArticlesRepository {
  async load(): Promise<LoadArticlesRepository.Result> {
    let articles = await prisma.article.findMany()
    if (!articles) {
      return []
    }
    return articles
  }
}
