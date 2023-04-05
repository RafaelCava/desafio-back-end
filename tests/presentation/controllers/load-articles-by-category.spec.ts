import { LoadArticlesByCategory } from '@/domain/usecases'
import { LoadArticlesByCategoryController } from '@/presentation/controllers'
import { LoadArticlesByCategorySpy } from '../mocks/load-articles'

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
})
