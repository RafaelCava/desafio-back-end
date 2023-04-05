import { LoadArticlesByTerm } from '@/domain/usecases'
import { Controller, HttpResponse } from '../protocols'
import { ok, serverError } from '../helpers/http-helper'

export class LoadArticlesByTermController implements Controller {
  constructor(private readonly loadArticlesByTerm: LoadArticlesByTerm) {}
  async handle(
    request: LoadArticlesByTermController.Request
  ): Promise<LoadArticlesByTermController.Result> {
    try {
      const articles = await this.loadArticlesByTerm.loadByTerm(request.term)
      return ok(articles)
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
