import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
  NotFoundException,
} from '@nestjs/common'
import { Response } from 'express'
import APIException from '../dto/APIException.dto'

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name)

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response: Response<any> = ctx.getResponse<Response>()

    if (exception instanceof NotFoundException) {
      response.status(HttpStatus.NOT_FOUND).send({
        code: 'NOT_FOUND',
        message: exception.message,
      })
      return
    }

    if (exception instanceof BadRequestException) {
      response.status(HttpStatus.NOT_FOUND).send({
        code: 'BAD_REQUEST',
        message: exception.message,
      })
      return
    }

    if (exception instanceof APIException) {
      if (!exception.data) {
        response.status(exception.status).send({
          code: exception.code,
          message: exception.message,
        })
        return
      }
      response.status(exception.status).send({
        code: exception.code,
        message: exception.message,
        data: exception.data,
      })
      return
    }
    console.error(exception)
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      code: 'COMMON_ERROR',
      message: '일시적인 오류가 발생하였습니다.',
      data: null,
    })
  }
}
