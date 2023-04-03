import 'module-alias/register'
import env from './config/env'
import prisma from '@/infra/db/prisma/client'

prisma.$connect().then(async () => {
  const { setupApp } = await import('./config/app')
  const app = await setupApp()
  app.listen(env.port, () =>
    console.log(`Server is running at http://localhost:${env.port}`)
  )
})
