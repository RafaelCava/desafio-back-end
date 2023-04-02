import { LoadArticles } from '@/domain/usecase'
import { type HttpResponse, type Controller } from '@/presentation/protocols'

export class LoadArticlesController implements Controller {
  constructor(private readonly loadArticles: LoadArticles) {}
  async handle(): Promise<LoadArticlesController.Result> {
    await this.loadArticles.load()
    return null
  }
}

export namespace LoadArticlesController {
  export type Result = HttpResponse
}
