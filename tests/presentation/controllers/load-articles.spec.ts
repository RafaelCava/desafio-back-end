import { type LoadArticles } from '@/domain/usecase'
import { LoadArticlesController } from '@/presentation/controllers'
import { LoadArticlesSpy } from '@/tests/domain/mocks/load-articles'

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
})
