import { ArticleMysqlRepository } from '@/infra/db/mysql/repositories/article-mysql-repository'
import {
  mockArticle,
  mockArticles,
  mockArticlesWithSameCategory,
  mockArticlesWithSameTerm,
  throwError,
} from '@/tests/domain/mocks'
import Mockdate from 'mockdate'
import prisma from '@/infra/db/mysql/client'
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

    it('Should throws if prisma throws', async () => {
      const sut = makeSut()
      jest.spyOn(prisma.article, 'findMany').mockImplementationOnce(throwError)
      const promise = sut.load()
      await expect(promise).rejects.toThrow()
    })
  })

  describe('loadByCategory()', () => {
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

    it('Should throws if prisma throws', async () => {
      const sut = makeSut()
      jest.spyOn(prisma.article, 'findMany').mockImplementationOnce(throwError)
      const promise = sut.loadByCategory('any_category')
      await expect(promise).rejects.toThrow()
    })
  })

  describe('loadByTerm()', () => {
    it('Should return a empty array if no articles are found', async () => {
      const sut = makeSut()
      const articles = await sut.loadByTerm('any_term')
      expect(articles).toEqual([])
    })

    it('Should throws if prisma throws', async () => {
      const sut = makeSut()
      jest.spyOn(prisma.article, 'findMany').mockImplementationOnce(throwError)
      const promise = sut.loadByTerm('any value')
      await expect(promise).rejects.toThrow()
    })

    it('Should return just only articles with same term provided', async () => {
      const sut = makeSut()
      await prisma.article.createMany({
        data: mockArticlesWithSameTerm() as any,
      })
      await prisma.article.create({
        data: Object.assign({}, mockArticle(), { id: 3 }) as any,
      })
      const articles = await sut.loadByTerm('any value')
      expect(articles).toEqual(mockArticlesWithSameTerm())
      expect(articles.length).toBe(2)
    })
  })
})
