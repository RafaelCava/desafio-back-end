import {
  loadArticlesPath,
  loadArticlesByCategoryPath,
  loadArticlesByTermPath,
} from './paths/'

export default {
  '/articles': loadArticlesPath,
  '/articles/{category}': loadArticlesByCategoryPath,
  '/articles/search/{term}': loadArticlesByTermPath,
}
