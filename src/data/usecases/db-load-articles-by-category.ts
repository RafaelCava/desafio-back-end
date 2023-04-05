import { LoadArticlesByCategory } from '@/domain/usecases'
import { LoadArticlesByCategoryRepository } from '@/data/protocols'

export class DbLoadArticlesByCategory implements LoadArticlesByCategory {
  constructor(
    private readonly loadArticlesByCategoryRepository: LoadArticlesByCategoryRepository
  ) {}

  async loadByCategory(
    category: string
  ): Promise<LoadArticlesByCategory.Result> {
    const articles = await this.loadArticlesByCategoryRepository.loadByCategory(
      category
    )
    return articles
  }
}
