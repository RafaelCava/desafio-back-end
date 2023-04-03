import { type LoadArticlesRepository } from '@/data/protocols'
import { DbLoadArticles } from '@/data/usecases'
import { LoadArticlesRepositorySpy } from '@/tests/data/mocks/load-articles-repository'

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
  it('should call LoadArticlesRepository once time', async () => {
    const { sut, loadArticlesRepositoryStub } = makeSut()
    const loadSpy = jest.spyOn(loadArticlesRepositoryStub, 'load')
    await sut.load()
    expect(loadSpy).toHaveBeenCalledTimes(1)
  })
})
