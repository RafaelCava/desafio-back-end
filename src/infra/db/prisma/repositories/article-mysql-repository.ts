import { LoadArticlesRepository } from '@/data/protocols'
import prisma from '@/infra/db/prisma/client'
import { MysqlHelper } from '@/infra/db/helpers'
export class ArticleMysqlRepository implements LoadArticlesRepository {
  async load(): Promise<LoadArticlesRepository.Result> {
    let articles = await prisma.article.findMany()
    if (!articles) {
      return []
    }
    articles = MysqlHelper.map(articles)
    return articles
  }
}
