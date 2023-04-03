import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/', (req, res) => {
    console.log('entrou')
    return res.status(200).send('ok')
  })
}
