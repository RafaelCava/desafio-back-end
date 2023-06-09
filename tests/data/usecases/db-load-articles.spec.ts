import { type LoadArticlesRepository } from '@/data/protocols'
import { DbLoadArticles } from '@/data/usecases'
import { LoadArticlesRepositorySpy } from '@/tests/data/mocks/articles-repository'
import { mockArticles, throwError } from '@/tests/domain/mocks'
import Mockdate from 'mockdate'

type SutTypes = {
  sut: DbLoadArticles
  loadArticlesRepositoryStub: LoadArticlesRepository
}

const makeSut = (): SutTypes => {
  const loadArticlesRepositoryStub = new LoadArticlesRepositorySpy()
  const sut = new DbLoadArticles(loadArticlesRepositoryStub)
  return {
    sut,
    loadArticlesRepositoryStub,
  }
}

describe('DbLoadArticles', () => {
  beforeEach(() => {
    Mockdate.set(new Date())
  })

  afterEach(() => {
    Mockdate.reset()
  })

  it('should call LoadArticlesRepository once time', async () => {
    const { sut, loadArticlesRepositoryStub } = makeSut()
    const loadSpy = jest.spyOn(loadArticlesRepositoryStub, 'load')
    await sut.load()
    expect(loadSpy).toHaveBeenCalledTimes(1)
  })

  it('should return an array with Articles if then exists', async () => {
    const { sut } = makeSut()
    const articles = await sut.load()
    expect(articles).toEqual(mockArticles())
  })

  it('should return a empty array if LoadArticlesRepository returns a empty array', async () => {
    const { sut } = makeSut()
    const articles = await sut.load()
    expect(articles).toEqual(mockArticles())
  })

  it('should throws if LoadArticlesRepository throws', async () => {
    const { sut, loadArticlesRepositoryStub } = makeSut()
    jest
      .spyOn(loadArticlesRepositoryStub, 'load')
      .mockImplementationOnce(throwError)
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})
