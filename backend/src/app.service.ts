import { Inject, Injectable } from '@nestjs/common'
import axios from 'axios'
import { BserService } from './bser/bser.service'
import { Res } from './common/dto/HttpResponse.dto'
import HttpResponse from './common/response/HttpResponse'
import { getTier } from './common/utils/tierHelper'
import { getData } from './dto/getData.dto'

@Injectable()
export class AppService {
  constructor(@Inject(BserService) private readonly bserService: BserService) {}

  getHello(): string {
    return 'Hello World!'
  }

  async getData(): Promise<Res<getData>> {
    const APIResponse = (await this.bserService.getManual(
      '/v2/user/stats/uid/soEDXWozh7CA6QhH0dacY07TWAtzxNJmvRMAUfwx0_K64SRTGVI8tSY_2w/41/3',
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    )) as any
    const stats = APIResponse.data.userStats[0]

    const RankData = getTier(stats.mmr, stats.rank)

    return HttpResponse('OPERATION_SUCCESS', '정상처리', {
      tier: RankData.subject_kr,
      tier_en: RankData.subject,
      division: RankData.division,
      over_mmr: stats.mmr - RankData.min_rp,
      mmr: stats.mmr,
      percentage: `${((stats.rank / stats.rankSize) * 100).toFixed(2)}%`,
    })
  }
}
