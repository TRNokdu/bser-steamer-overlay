import { HttpStatus, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import APIException from './common/dto/APIException.dto'
import { GlobalExceptionFilter } from './common/filter/global-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new GlobalExceptionFilter())
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory() {
        throw new APIException(
          HttpStatus.BAD_REQUEST,
          'INVALID_REQUEST',
          '잘못된 요청입니다.',
        )
      },
    }),
  )
  app.enableCors()
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
