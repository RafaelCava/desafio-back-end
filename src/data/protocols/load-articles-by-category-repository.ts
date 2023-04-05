import { Article as ArticleModel } from '@/domain/models'

export interface LoadArticlesByCategoryRepository {
  loadByCategory: (
    category: string
  ) => Promise<LoadArticlesByCategoryRepository.Result>
}

export namespace LoadArticlesByCategoryRepository {
  export type Result = ArticleModel[]
}
