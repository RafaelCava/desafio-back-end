import { LoadArticlesRepository } from '@/data/protocols'
import { mockArticles } from '@/tests/domain/mocks'

export class LoadArticlesRepositorySpy implements LoadArticlesRepository {
  async load(): Promise<LoadArticlesRepository.Result> {
    return await Promise.resolve(mockArticles())
  }
}
