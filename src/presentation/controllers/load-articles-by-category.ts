import { LoadArticlesByCategory } from '@/domain/usecases'
import { Controller, HttpResponse } from '../protocols'

export class LoadArticlesByCategoryController implements Controller {
  constructor(
    private readonly loadArticlesByCategory: LoadArticlesByCategory
  ) {}
  async handle(
    request: LoadArticlesByCategoryController.Request
  ): Promise<LoadArticlesByCategoryController.Result> {
    await this.loadArticlesByCategory.loadByCategory(request.category)
    return null as any
  }
}

export namespace LoadArticlesByCategoryController {
  export type Request = {
    category: string
  }

  export type Result = HttpResponse
}
