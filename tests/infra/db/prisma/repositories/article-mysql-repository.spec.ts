import { ArticleMysqlRepository } from '@/infra/db/prisma/repositories/article-mysql-repository'

const makeSut = (): ArticleMysqlRepository => {
  return new ArticleMysqlRepository()
}

describe('ArticleMysqlRepository', () => {
  it('Should return a empty array if no articles are found', async () => {
    const sut = makeSut()
    const articles = await sut.load()
    expect(articles).toEqual([])
  })
})
