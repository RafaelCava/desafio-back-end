import { LoadArticlesByCategory } from '@/domain/usecases'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { badRequest, ok, serverError } from '@/presentation/helpers/http-helper'
import { MissingParamError } from '../errors'

export class LoadArticlesByCategoryController implements Controller {
  constructor(
    private readonly loadArticlesByCategory: LoadArticlesByCategory
  ) {}
  async handle(
    request: LoadArticlesByCategoryController.Request
  ): Promise<LoadArticlesByCategoryController.Result> {
    try {
      if (!request.category) {
        return badRequest(new MissingParamError('category'))
      }
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
