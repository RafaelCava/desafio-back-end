import { Article as ArticleModel } from '@/domain/models'

export interface LoadArticlesByTerm {
  loadByTerm: (category: string) => Promise<LoadArticlesByTerm.Result>
}

export namespace LoadArticlesByTerm {
  export type Result = ArticleModel[] | []
}
