import { LoadArticlesByTerm } from '@/domain/usecases'
import { LoadArticlesByTermRepository } from '../protocols'

export class DbLoadArticlesByTerm implements LoadArticlesByTerm {
  constructor(
    private readonly loadArticlesByTermRepository: LoadArticlesByTermRepository
  ) {}

  async loadByTerm(term: string): Promise<LoadArticlesByTerm.Result> {
    const articles = await this.loadArticlesByTermRepository.loadByTerm(term)
    return articles
  }
}
