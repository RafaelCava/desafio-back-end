import { LoadArticlesByCategory } from '@/domain/usecases'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError } from '@/presentation/helpers/http-helper'

export class LoadArticlesByCategoryController implements Controller {
  constructor(
    private readonly loadArticlesByCategory: LoadArticlesByCategory
  ) {}
  async handle(
    request: LoadArticlesByCategoryController.Request
  ): Promise<LoadArticlesByCategoryController.Result> {
    try {
      await this.loadArticlesByCategory.loadByCategory(request.category)
      return null as any
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
