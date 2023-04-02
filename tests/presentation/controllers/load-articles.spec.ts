import { type LoadArticles } from '@/domain/usecase'
import { LoadArticlesController } from '@/presentation/controllers'
import { serverError } from '@/presentation/helpers/http-helper'
import { StatusCode } from '@/presentation/protocols'
import { LoadArticlesSpy, throwError } from '@/tests/domain/mocks'

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
    expect(httpResponse).toEqual(serverError(new Error().stack))
  })
})
