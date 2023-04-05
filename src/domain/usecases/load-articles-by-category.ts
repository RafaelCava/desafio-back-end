import { Article as ArticleModel } from '@/domain/models'

export interface LoadArticlesByCategory {
  loadByCategory: (category: string) => Promise<LoadArticlesByCategory.Result>
}

export namespace LoadArticlesByCategory {
  export type Result = ArticleModel[] | []
}
