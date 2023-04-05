import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import {
  makeLoadArticlesByCategoryController,
  makeLoadArticlesController,
} from '../factories/controllers'

export default (router: Router): void => {
  router.get('/articles', adaptRoute(makeLoadArticlesController()))
  router.get(
    '/articles/:category',
    adaptRoute(makeLoadArticlesByCategoryController())
  )
}
