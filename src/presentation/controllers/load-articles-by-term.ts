import { LoadArticlesByTerm } from '@/domain/usecases'
import { Controller, HttpResponse } from '../protocols'
import { serverError } from '../helpers/http-helper'

export class LoadArticlesByTermController implements Controller {
  constructor(private readonly loadArticlesByTerm: LoadArticlesByTerm) {}
  async handle(
    request: LoadArticlesByTermController.Request
  ): Promise<LoadArticlesByTermController.Result> {
    try {
      await this.loadArticlesByTerm.loadByTerm(request.term)
      return null as any
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadArticlesByTermController {
  export type Request = {
    term: string
  }

  export type Result = HttpResponse
}
