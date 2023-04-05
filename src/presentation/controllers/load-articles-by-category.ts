import { LoadArticlesByCategory } from '@/domain/usecases'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers/http-helper'

export class LoadArticlesByCategoryController implements Controller {
  constructor(
    private readonly loadArticlesByCategory: LoadArticlesByCategory
  ) {}
  async handle(
    request: LoadArticlesByCategoryController.Request
  ): Promise<LoadArticlesByCategoryController.Result> {
    try {
      const articles = await this.loadArticlesByCategory.loadByCategory(
        request.category
      )
      return ok(articles)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadArticlesByCategoryController {
  export type Request = {
    category: string
  }

  export type Result = HttpResponse
}
