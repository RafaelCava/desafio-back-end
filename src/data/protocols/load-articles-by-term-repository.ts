import { Article as ArticleModel } from '@/domain/models'

export interface LoadArticlesByTermRepository {
  loadByTerm(term: string): Promise<LoadArticlesByTermRepository.Result>
}

export namespace LoadArticlesByTermRepository {
  export type Result = ArticleModel[] | []
}
