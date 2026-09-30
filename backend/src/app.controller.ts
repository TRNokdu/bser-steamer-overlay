import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { Res } from './common/dto/HttpResponse.dto'
import { getData } from './dto/getData.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('data')
  async getData(): Promise<Res<getData>> {
    return await this.appService.getData()
  }
}
