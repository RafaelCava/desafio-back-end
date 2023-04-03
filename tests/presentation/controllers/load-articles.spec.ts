import { type LoadArticles } from '@/domain/usecases'
import { LoadArticlesController } from '@/presentation/controllers'
import { ok, serverError } from '@/presentation/helpers/http-helper'
import { mockArticles, throwError } from '@/tests/domain/mocks'
import Mockdate from 'mockdate'
import { LoadArticlesSpy } from '../mocks/load-articles'

type SutTypes = {
  sut: LoadArticlesController
  loadArticlesSpy: LoadArticles
}

const makeSut = (): SutTypes => {
  const loadArticlesSpy = new LoadArticlesSpy()
  const sut = new LoadArticlesController(loadArticlesSpy)
  return {
    sut,
    loadArticlesSpy,
  }
}

describe('LoadArticles Controller', () => {
  beforeEach(() => {
    Mockdate.set(new Date())
  })

  afterEach(() => {
    Mockdate.reset()
  })

  it('Should call LoadArticles once time', async () => {
    const { sut, loadArticlesSpy } = makeSut()
    const loadSpy = jest.spyOn(loadArticlesSpy, 'load')
    await sut.handle()
    expect(loadSpy).toHaveBeenCalledTimes(1)
  })

  it('Should return ServerError if LoadArticles throws', async () => {
    const { sut, loadArticlesSpy } = makeSut()
    jest.spyOn(loadArticlesSpy, 'load').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(serverError(new Error().stack as string))
  })

  it('Should return 200 and an array with Articles if then exists', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(ok(mockArticles()))
  })

  it("Should return 200 with empty array if doesn't exists Articles", async () => {
    const { sut, loadArticlesSpy } = makeSut()
    jest.spyOn(loadArticlesSpy, 'load').mockReturnValueOnce(Promise.resolve([]))
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(ok([]))
  })
})
