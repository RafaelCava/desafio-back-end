import {
  LoadArticlesByCategoryRepository,
  LoadArticlesByTermRepository,
  LoadArticlesRepository,
} from '@/data/protocols'
import {
  mockArticles,
  mockArticlesWithSameCategory,
  mockArticlesWithSameTerm,
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

export class LoadArticlesByTermRepositorySpy
  implements LoadArticlesByTermRepository
{
  async loadByTerm(term: string): Promise<LoadArticlesRepository.Result> {
    return await Promise.resolve(mockArticlesWithSameTerm())
  }
}
