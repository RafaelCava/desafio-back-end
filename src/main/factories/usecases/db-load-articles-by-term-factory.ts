import { DbLoadArticlesByTerm } from '@/data/usecases'
import { LoadArticlesByTerm } from '@/domain/usecases'
import { ArticleMysqlRepository } from '@/infra/db/mysql/repositories/article-mysql-repository'

export const makeDbLoadArticlesByTerm = (): LoadArticlesByTerm => {
  return new DbLoadArticlesByTerm(new ArticleMysqlRepository())
}
