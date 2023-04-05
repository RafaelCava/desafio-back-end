import { LoadArticlesByTerm } from '@/domain/usecases'
import { serverError } from '@/presentation/helpers/http-helper'
import { LoadArticlesByTermController } from '@/presentation/controllers'
import { LoadArticlesByTermSpy } from '../mocks/load-articles'
import { throwError } from '@/tests/domain/mocks'

type SutTypes = {
  sut: LoadArticlesByTermController
  loadArticlesByTermSpy: LoadArticlesByTerm
}

const makeSut = (): SutTypes => {
  const loadArticlesByTermSpy = new LoadArticlesByTermSpy()
  const sut = new LoadArticlesByTermController(loadArticlesByTermSpy)
  return {
    sut,
    loadArticlesByTermSpy,
  }
}

const mockRequest = (): LoadArticlesByTermController.Request => ({
  term: 'any value',
})

describe('LoadArticlesByTerm Controller', () => {
  it('should call LoadArticlesByTerm with correct value', async () => {
    const { sut, loadArticlesByTermSpy } = makeSut()
    const loadByTermSpy = jest.spyOn(loadArticlesByTermSpy, 'loadByTerm')
    await sut.handle(mockRequest())
    expect(loadByTermSpy).toHaveBeenCalledWith(mockRequest().term)
    expect(loadByTermSpy).toHaveBeenCalledTimes(1)
  })

  it('should return ServerError if LoadArticlesByTerm throws', async () => {
    const { sut, loadArticlesByTermSpy } = makeSut()
    jest
      .spyOn(loadArticlesByTermSpy, 'loadByTerm')
      .mockImplementationOnce(throwError)
    const articles = await sut.handle(mockRequest())
    expect(articles).toEqual(serverError(new Error().stack as string))
  })
})
