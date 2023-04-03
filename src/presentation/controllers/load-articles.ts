import { LoadArticles } from '@/domain/usecases'
import { type HttpResponse, type Controller } from '@/presentation/protocols'
import { ok, serverError } from '../helpers/http-helper'

export class LoadArticlesController implements Controller {
  constructor(private readonly loadArticles: LoadArticles) {}
  async handle(): Promise<LoadArticlesController.Result> {
    try {
      const articles = await this.loadArticles.load()
      return ok(articles)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadArticlesController {
  export type Result = HttpResponse
}
