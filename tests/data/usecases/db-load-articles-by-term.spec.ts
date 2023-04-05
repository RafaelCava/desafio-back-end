import { DbLoadArticlesByTerm } from '@/data/usecases'
import { LoadArticlesByTermRepository } from '@/data/protocols'
import { LoadArticlesByTermRepositorySpy } from '../mocks/articles-repository'
import { throwError } from '@/tests/domain/mocks'

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

  it('should throws if loadArticlesByTermRepository throws', async () => {
    const { sut, loadArticlesByTermRepositorySpy } = makeSut()
    jest
      .spyOn(loadArticlesByTermRepositorySpy, 'loadByTerm')
      .mockImplementationOnce(throwError)
    const promise = sut.loadByTerm('any value')
    await expect(promise).rejects.toThrow()
  })

  it('should return a empty array if loadArticlesByTermRepository returns a empty array', async () => {
    const { sut, loadArticlesByTermRepositorySpy } = makeSut()
    jest
      .spyOn(loadArticlesByTermRepositorySpy, 'loadByTerm')
      .mockReturnValueOnce(Promise.resolve([]))
    const articles = await sut.loadByTerm('any value')
    expect(articles).toEqual([])
  })
})
