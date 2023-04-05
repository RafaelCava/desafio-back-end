import { StatusCode, type HttpResponse } from '@/presentation/protocols'
import { ServerError } from '../errors'

export const serverError = (stack: string): HttpResponse<Error> => ({
  statusCode: StatusCode.serverError,
  body: new ServerError(stack),
})

export function ok<T>(body: T): HttpResponse<T> {
  return {
    body,
    statusCode: StatusCode.ok,
  }
}

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
})
