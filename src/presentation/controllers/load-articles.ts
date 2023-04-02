import { LoadArticles } from '@/domain/usecase'
import { type HttpResponse, type Controller } from '@/presentation/protocols'
import { serverError } from '../helpers/http-helper'
import { ServerError } from '../errors'

export class LoadArticlesController implements Controller {
  constructor(private readonly loadArticles: LoadArticles) {}
  async handle(): Promise<LoadArticlesController.Result> {
    try {
      await this.loadArticles.load()
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadArticlesController {
  export type Result = HttpResponse
}
