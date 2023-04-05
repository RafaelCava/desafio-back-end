import { LoadArticlesByCategoryController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeDbLoadArticlesByCategory } from '../usecases'

export const makeLoadArticlesByCategoryController = (): Controller => {
  return new LoadArticlesByCategoryController(makeDbLoadArticlesByCategory())
}
