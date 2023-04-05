import { type Article as ArticleModel } from '@/domain/models'

export interface LoadArticlesRepository {
  load: () => Promise<LoadArticlesRepository.Result>
}

export namespace LoadArticlesRepository {
  export type Result = ArticleModel[] | []
}
