import { LoadArticles } from '@/domain/usecase'

export class LoadArticlesSpy implements LoadArticles {
  async load(): Promise<LoadArticles.Result> {
    return await Promise.resolve([
      {
        id: 'any_id',
        title: 'any_title',
        author: 'any_author',
        content: 'any_value',
        date: new Date(),
        category: 'any_category',
      },
      {
        id: 'any_id_2',
        title: 'any_title_2',
        author: 'any_author_2',
        content: 'any_value_2',
        date: new Date(),
        category: 'any_category_2',
      },
    ])
  }
}
