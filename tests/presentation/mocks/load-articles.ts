import {
  LoadArticles,
  LoadArticlesByCategory,
  LoadArticlesByTerm,
} from '@/domain/usecases'
import {
  mockArticles,
  mockArticlesWithSameCategory,
  mockArticlesWithSameTerm,
} from '@/tests/domain/mocks/mock-articles'

export class LoadArticlesSpy implements LoadArticles {
  async load(): Promise<LoadArticles.Result> {
    return await Promise.resolve(mockArticles())
  }
}

export class LoadArticlesByCategorySpy implements LoadArticlesByCategory {
  async loadByCategory(
    category: string
  ): Promise<LoadArticlesByCategory.Result> {
    return await Promise.resolve(mockArticlesWithSameCategory())
  }
}

export class LoadArticlesByTermSpy implements LoadArticlesByTerm {
  async loadByTerm(term: string): Promise<LoadArticlesByTerm.Result> {
    return await Promise.resolve(mockArticlesWithSameTerm())
  }
}
