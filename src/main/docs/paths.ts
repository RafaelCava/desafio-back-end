import { loadArticlesPath, loadArticlesByCategoryPath } from './paths/'

export default {
  '/articles': loadArticlesPath,
  '/articles/{category}': loadArticlesByCategoryPath,
}
