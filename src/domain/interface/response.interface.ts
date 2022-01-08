import { UserInterface } from './users.interface'

interface dataInterface {
  code: number
  message: string
}

export interface SuccessInterface {
  success: dataInterface
}

export interface ErrorInterface {
  error: dataInterface
}

export interface ResponseLoginInteface {
  message: string
  token: string
  data: UserInterface
}

export type ResponseInterface = string | Error | SuccessInterface | ErrorInterface
