import { Express } from 'express'
import prisma from '@/infra/db/mysql/client'
import { mockArticle } from '@/tests/domain/mocks'
import Mockdate from 'mockdate'
import request from 'supertest'
import { setupApp } from '@/main/config/app'

let app: Express

describe('Article Routes', () => {
  beforeEach(async () => {
    Mockdate.set(new Date())
    await prisma.article.deleteMany()
  })

  beforeAll(async () => {
    await prisma.$connect()
    app = await setupApp()
  })

  afterAll(async () => {
    await prisma.article.deleteMany()
    await prisma.$disconnect()
  })

  afterEach(() => {
    Mockdate.reset()
  })
  describe('GET /articles', () => {
    it('Should return 200 with an array with articles', async () => {
      let article: any = mockArticle()
      await prisma.article.create({
        data: article,
      })
      article.date = article.date.toISOString()
      await request(app)
        .get('/api/articles')
        .expect(200)
        .then(res => {
          expect(res.body).toEqual([article])
        })
    })

    it("Should return 200 with a empty array if doesn't exists articles", async () => {
      await request(app)
        .get('/api/articles')
        .expect(200)
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true)
          expect(res.body.length).toBe(0)
        })
    })
  })

  describe('GET /articles/:category', () => {
    it('Should return 200 with an array with articles', async () => {
      const article: any = mockArticle()
      await prisma.article.create({
        data: article as any,
      })
      article.date = article.date.toISOString()
      await request(app)
        .get(`/api/articles/${article.category}`)
        .expect(200)
        .then(res => {
          expect(res.body).toEqual([article])
        })
    })

    it("Should return 200 with a empty array if doesn't exists articles", async () => {
      await request(app)
        .get('/api/articles/any_category')
        .expect(200)
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true)
          expect(res.body.length).toBe(0)
        })
    })
  })

  describe('GET /articles/search/:term', () => {
    it('Should return 200 with a empty array if no articles are found', async () => {
      await request(app)
        .get('/api/articles/search/any_term')
        .expect(200)
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true)
          expect(res.body.length).toBe(0)
        })
    })
  })
})
