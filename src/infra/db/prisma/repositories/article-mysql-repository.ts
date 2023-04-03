import { LoadArticlesRepository } from '@/data/protocols'
import prisma from '@/infra/db/prisma/client'

export class ArticleMysqlRepository implements LoadArticlesRepository {
  async load(): Promise<LoadArticlesRepository.Result> {
    const articles = await prisma.article.findMany()
    return articles
  }
}
