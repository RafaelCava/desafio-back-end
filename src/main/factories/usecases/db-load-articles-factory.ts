import { DbLoadArticles } from '@/data/usecases'
import { LoadArticles } from '@/domain/usecases'
import { ArticleMysqlRepository } from '@/infra/db/prisma/repositories/article-mysql-repository'

export const makeDbLoadArticles = (): LoadArticles => {
  return new DbLoadArticles(new ArticleMysqlRepository())
}
