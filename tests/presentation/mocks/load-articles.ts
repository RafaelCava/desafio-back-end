import { LoadArticles } from '@/domain/usecase'
import { mockArticles } from '../../domain/mocks/mock-articles'

export class LoadArticlesSpy implements LoadArticles {
  async load(): Promise<LoadArticles.Result> {
    return await Promise.resolve(mockArticles())
  }
}
