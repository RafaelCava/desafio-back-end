import { LoadArticlesRepository } from '@/data/protocols'
import prisma from '@/infra/db/prisma/client'
import { MysqlHelper } from '@/infra/db/helpers'
export class ArticleMysqlRepository implements LoadArticlesRepository {
  async load(): Promise<LoadArticlesRepository.Result> {
    let articles = await prisma.article.findMany()
    articles = MysqlHelper.map(articles)
    console.log(typeof articles[0].date)
    return articles
  }
}
