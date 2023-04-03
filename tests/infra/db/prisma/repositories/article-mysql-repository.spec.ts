import { ArticleMysqlRepository } from '@/infra/db/prisma/repositories/article-mysql-repository'
import { mockArticle } from '@/tests/domain/mocks'
import Mockdate from 'mockdate'
import prisma from '@/infra/db/prisma/client'
const makeSut = (): ArticleMysqlRepository => {
  return new ArticleMysqlRepository()
}

describe('ArticleMysqlRepository', () => {
  beforeEach(async () => {
    Mockdate.set(new Date())
    await prisma.article.deleteMany()
  })

  afterAll(async () => {
    await prisma.article.deleteMany()
    await prisma.$disconnect()
  })

  afterEach(() => {
    Mockdate.reset()
  })

  describe('load()', () => {
    it('Should return a empty array if no articles are found', async () => {
      const sut = makeSut()
      const articles = await sut.load()
      expect(articles).toEqual([])
    })

    it('Should return an array with articles', async () => {
      await prisma.article.create({
        data: mockArticle(),
      })
      const sut = makeSut()
      const articles = await sut.load()
      expect(articles).toEqual([mockArticle()])
    })
  })
})
