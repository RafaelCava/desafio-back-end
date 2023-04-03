import { LoadArticlesRepository } from '@/data/protocols'

export class ArticleMysqlRepository implements LoadArticlesRepository {
  async load(): Promise<LoadArticlesRepository.Result> {
    return await Promise.resolve([])
  }
}
