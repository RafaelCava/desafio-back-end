import { DbLoadArticlesByCategory } from '@/data/usecases'
import { LoadArticlesByCategory } from '@/domain/usecases'
import { ArticleMysqlRepository } from '@/infra/db/mysql/repositories/article-mysql-repository'

export const makeDbLoadArticlesByCategory = (): LoadArticlesByCategory => {
  return new DbLoadArticlesByCategory(new ArticleMysqlRepository())
}
