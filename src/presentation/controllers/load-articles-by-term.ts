import { LoadArticlesByTerm } from '@/domain/usecases'
import { Controller, HttpResponse } from '../protocols'

export class LoadArticlesByTermController implements Controller {
  constructor(private readonly loadArticlesByTerm: LoadArticlesByTerm) {}
  async handle(
    request: LoadArticlesByTermController.Request
  ): Promise<LoadArticlesByTermController.Result> {
    await this.loadArticlesByTerm.loadByTerm(request.term)
    return null as any
  }
}

export namespace LoadArticlesByTermController {
  export type Request = {
    term: string
  }

  export type Result = HttpResponse
}
