import { LoadArticles } from '@/domain/usecases'
import { LoadArticlesRepository } from '@/data/protocols'

export class DbLoadArticles implements LoadArticles {
  constructor(
    private readonly loadArticlesRepository: LoadArticlesRepository
  ) {}

  async load(): Promise<LoadArticles.Result> {
    const articles = await this.loadArticlesRepository.load()
    return articles
  }
}
