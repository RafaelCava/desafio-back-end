import {
  LoadArticlesByCategoryRepository,
  LoadArticlesRepository,
} from '@/data/protocols'
import {
  mockArticles,
  mockArticlesWithSameCategory,
} from '@/tests/domain/mocks'

export class LoadArticlesRepositorySpy implements LoadArticlesRepository {
  async load(): Promise<LoadArticlesRepository.Result> {
    return await Promise.resolve(mockArticles())
  }
}

export class LoadArticlesByCategoryRepositorySpy
  implements LoadArticlesByCategoryRepository
{
  async loadByCategory(
    category: string
  ): Promise<LoadArticlesRepository.Result> {
    return await Promise.resolve(mockArticlesWithSameCategory())
  }
}
