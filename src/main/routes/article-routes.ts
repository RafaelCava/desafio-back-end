import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeLoadArticlesController } from '../factories/controllers'

export default (router: Router): void => {
  router.get('/articles', adaptRoute(makeLoadArticlesController()))
}
