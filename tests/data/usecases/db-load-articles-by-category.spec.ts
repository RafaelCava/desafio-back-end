import { DbLoadArticlesByCategory } from '@/data/usecases'
import { LoadArticlesByCategoryRepository } from '@/data/protocols'
import { LoadArticlesByCategoryRepositorySpy } from '../mocks/load-articles-repository'

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
})
