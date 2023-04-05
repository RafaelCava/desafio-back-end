import { LoadArticlesController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeDbLoadArticles } from '../usecases'

export const makeLoadArticlesController = (): Controller => {
  return new LoadArticlesController(makeDbLoadArticles())
}
