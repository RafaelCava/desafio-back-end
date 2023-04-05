import { LoadArticles, LoadArticlesByCategory } from '@/domain/usecases'
import {
  mockArticles,
  mockArticlesWithSameCategory,
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
