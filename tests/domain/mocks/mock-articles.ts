import { Article } from '@/domain/models'
export const mockArticle = (): Article => ({
  id: 'any_id',
  author: 'any_author',
  category: 'any_category',
  content: 'any_content',
  date: new Date(),
  title: 'any_title',
})

export const mockArticles = (): Article[] => [
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
]
