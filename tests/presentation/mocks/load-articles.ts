import { LoadArticles } from '@/domain/usecases'
import { mockArticles } from '../../domain/mocks/mock-articles'

export class LoadArticlesSpy implements LoadArticles {
  async load(): Promise<LoadArticles.Result> {
    return await Promise.resolve(mockArticles())
  }
}
