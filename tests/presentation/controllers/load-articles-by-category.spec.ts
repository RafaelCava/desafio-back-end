import { LoadArticlesByCategory } from '@/domain/usecases'
import { LoadArticlesByCategoryController } from '@/presentation/controllers'
import { LoadArticlesByCategorySpy } from '../mocks/load-articles'
import { mockArticlesWithSameCategory, throwError } from '@/tests/domain/mocks'
import { badRequest, ok, serverError } from '@/presentation/helpers/http-helper'
import { MissingParamError } from '@/presentation/errors'
import Mockdate from 'mockdate'

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
  beforeEach(() => {
    Mockdate.set(new Date())
  })

  afterEach(() => {
    Mockdate.reset()
  })

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

  it('should returns badRequest if no category are provided', async () => {
    const { sut, loadArticlesByCategorySpy } = makeSut()
    jest
      .spyOn(loadArticlesByCategorySpy, 'loadByCategory')
      .mockImplementationOnce(throwError)
    const articles = await sut.handle({} as any)
    expect(articles).toEqual(badRequest(new MissingParamError('category')))
  })

  it('should returns 200 with a empty array if LoadArticlesByCategory returns a empty array', async () => {
    const { sut, loadArticlesByCategorySpy } = makeSut()
    jest
      .spyOn(loadArticlesByCategorySpy, 'loadByCategory')
      .mockReturnValueOnce(Promise.resolve([]))
    const articles = await sut.handle(mockRequest())
    expect(articles).toEqual(ok([]))
  })

  it('should returns 200 with articles with the same category', async () => {
    const { sut } = makeSut()
    const articles = await sut.handle(mockRequest())
    expect(articles).toEqual(ok(mockArticlesWithSameCategory()))
  })
})
