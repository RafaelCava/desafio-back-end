import { LoadArticlesByCategory } from '@/domain/usecases'
import { LoadArticlesByCategoryController } from '@/presentation/controllers'
import { LoadArticlesByCategorySpy } from '../mocks/load-articles'
import { throwError } from '@/tests/domain/mocks'
import { ok, serverError } from '@/presentation/helpers/http-helper'

type SutTypes = {
  sut: LoadArticlesByCategoryController
  loadArticlesByCategorySpy: LoadArticlesByCategory
}

const makeSut = (): SutTypes => {
  const loadArticlesByCategorySpy = new LoadArticlesByCategorySpy()
  const sut = new LoadArticlesByCategoryController(loadArticlesByCategorySpy)
  return {
    sut,
    loadArticlesByCategorySpy,
  }
}

const mockRequest = (): LoadArticlesByCategoryController.Request => ({
  category: 'any_category',
})

describe('LoadArticlesByCategory Controller', () => {
  it('should call LoadArticlesByCategory with correct values', async () => {
    const { sut, loadArticlesByCategorySpy } = makeSut()
    const loadByCategorySpy = jest.spyOn(
      loadArticlesByCategorySpy,
      'loadByCategory'
    )
    await sut.handle(mockRequest())
    expect(loadByCategorySpy).toHaveBeenCalledWith(mockRequest().category)
    expect(loadByCategorySpy).toHaveBeenCalledTimes(1)
  })

  it('should returns ServerError if LoadArticlesByCategory throws', async () => {
    const { sut, loadArticlesByCategorySpy } = makeSut()
    jest
      .spyOn(loadArticlesByCategorySpy, 'loadByCategory')
      .mockImplementationOnce(throwError)
    const articles = await sut.handle(mockRequest())
    expect(articles).toEqual(serverError(new Error().stack as string))
  })

  it('should returns 200 with a empty array if no Articles are found', async () => {
    const { sut, loadArticlesByCategorySpy } = makeSut()
    jest
      .spyOn(loadArticlesByCategorySpy, 'loadByCategory')
      .mockReturnValueOnce(Promise.resolve([]))
    const articles = await sut.handle(mockRequest())
    expect(articles).toEqual(ok([]))
  })
})
