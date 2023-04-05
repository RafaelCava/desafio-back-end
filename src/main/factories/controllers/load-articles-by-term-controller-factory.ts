import { LoadArticlesByTermController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeDbLoadArticlesByTerm } from '../usecases'

export const makeLoadArticlesByTermController = (): Controller => {
  return new LoadArticlesByTermController(makeDbLoadArticlesByTerm())
}
