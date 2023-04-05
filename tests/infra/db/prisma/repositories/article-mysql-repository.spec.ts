import { ArticleMysqlRepository } from '@/infra/db/prisma/repositories/article-mysql-repository'
import {
  mockArticle,
  mockArticles,
  mockArticlesWithSameCategory,
} from '@/tests/domain/mocks'
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

  it('Should be defined', () => {
    const sut = makeSut()
    expect(sut).toBeTruthy()
  })

  describe('load()', () => {
    it('Should return a empty array if no articles are found', async () => {
      const sut = makeSut()
      const articles = await sut.load()
      expect(articles).toEqual([])
    })

    it('Should return an array with articles', async () => {
      await prisma.article.create({
        data: mockArticle() as any,
      })
      const sut = makeSut()
      const articles = await sut.load()
      expect(articles).toEqual([mockArticle()])
    })

    it('Should return an array with articles order by date', async () => {
      await prisma.article.createMany({
        data: mockArticles() as any,
      })
      const sut = makeSut()
      const articles = await sut.load()
      expect(articles).toEqual([mockArticles()[0], mockArticles()[1]])
    })
  })

  describe('loadByCategory', () => {
    it('Should return a empty array if no articles are found', async () => {
      const sut = makeSut()
      const articles = await sut.loadByCategory('any_category')
      expect(articles).toEqual([])
    })

    it('Should return Articles if they exists', async () => {
      const sut = makeSut()
      await prisma.article.createMany({
        data: mockArticlesWithSameCategory() as any,
      })
      const articles = await sut.loadByCategory('any_category')
      expect(articles).toEqual(mockArticlesWithSameCategory())
    })
  })
})
