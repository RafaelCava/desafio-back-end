import { DbLoadArticlesByTerm } from '@/data/usecases'
import { LoadArticlesByTermRepository } from '@/data/protocols'
import { LoadArticlesByTermRepositorySpy } from '../mocks/articles-repository'

type SutTypes = {
  sut: DbLoadArticlesByTerm
  loadArticlesByTermRepositorySpy: LoadArticlesByTermRepository
}

const makeSut = (): SutTypes => {
  const loadArticlesByTermRepositorySpy = new LoadArticlesByTermRepositorySpy()
  const sut = new DbLoadArticlesByTerm(loadArticlesByTermRepositorySpy)
  return {
    sut,
    loadArticlesByTermRepositorySpy,
  }
}

describe('DbLoadArticlesByTerm', () => {
  it('should call loadArticlesByTermRepository with correct value', async () => {
    const { sut, loadArticlesByTermRepositorySpy } = makeSut()
    const loadByTermSpy = jest.spyOn(
      loadArticlesByTermRepositorySpy,
      'loadByTerm'
    )
    await sut.loadByTerm('any value')
    expect(loadByTermSpy).toHaveBeenCalledWith('any value')
    expect(loadByTermSpy).toHaveBeenCalledTimes(1)
  })
})
