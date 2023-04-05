import { DbLoadArticlesByCategory } from '@/data/usecases'
import { LoadArticlesByCategoryRepository } from '@/data/protocols'
import { LoadArticlesByCategoryRepositorySpy } from '../mocks/load-articles-repository'
import { throwError } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbLoadArticlesByCategory
  loadArticlesByCategoryRepositorySpy: LoadArticlesByCategoryRepository
}

const makeSut = (): SutTypes => {
  const loadArticlesByCategoryRepositorySpy =
    new LoadArticlesByCategoryRepositorySpy()
  const sut = new DbLoadArticlesByCategory(loadArticlesByCategoryRepositorySpy)
  return {
    sut,
    loadArticlesByCategoryRepositorySpy,
  }
}

describe('DbLoadArticlesByCategory', () => {
  it('should call LoadArticlesByCategoryRepository with correct value', async () => {
    const { sut, loadArticlesByCategoryRepositorySpy } = makeSut()
    const loadByCategorySpy = jest.spyOn(
      loadArticlesByCategoryRepositorySpy,
      'loadByCategory'
    )
    await sut.loadByCategory('any_category')
    expect(loadByCategorySpy).toHaveBeenCalledWith('any_category')
  })

  it('should throws if LoadArticlesByCategoryRepository throws', async () => {
    const { sut, loadArticlesByCategoryRepositorySpy } = makeSut()
    jest
      .spyOn(loadArticlesByCategoryRepositorySpy, 'loadByCategory')
      .mockImplementationOnce(throwError)
    const promise = sut.loadByCategory('any_category')
    await expect(promise).rejects.toThrow()
  })

  it('should a empty array if LoadArticlesByCategoryRepository returns a empty array', async () => {
    const { sut, loadArticlesByCategoryRepositorySpy } = makeSut()
    jest
      .spyOn(loadArticlesByCategoryRepositorySpy, 'loadByCategory')
      .mockReturnValueOnce(Promise.resolve([]))
    const articles = await sut.loadByCategory('any_category')
    expect(articles).toEqual([])
  })
})
