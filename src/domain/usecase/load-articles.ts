import { Article as ArticleModel } from '@/domain/models'

export interface LoadArticles {
  load: () => Promise<LoadArticles.Result>
}

export namespace LoadArticles {
  export type Result = ArticleModel[] | []
}
