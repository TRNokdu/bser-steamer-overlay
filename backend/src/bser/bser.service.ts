import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { create } from 'axios'
import rateLimit, { RateLimitedAxiosInstance } from 'axios-rate-limit'
import { envDto } from '../common/dto/Env.dto'
import { IErClient } from './dto/ErClient.dto'

@Injectable()
export class BserService {
  private fetcher: RateLimitedAxiosInstance

  constructor(private configService: ConfigService<envDto>) {
    this.fetcher = rateLimit(
      create({
        baseURL: 'https://open-api.bser.io/',
        timeout: 5000,
        headers: {
          'x-api-key': this.configService.get('BSER_API_KEY'),
        },
      }),
      { maxRPS: 1 },
    )
  }

  async getManual(endpoint: string): Promise<IErClient<unknown>> {
    try {
      const res = await this.fetcher.get(endpoint)
      return {
        isError: false,
        data: res.data,
      }
    } catch {
      return {
        isError: true,
        data: null,
      }
    }
  }

  async getSeason(): Promise<IErClient<number>> {
    try {
      const res = await this.fetcher.get('v2/data/Season')
      const seasonData = res.data.data.find((i) => i.isCurrent === 1)

      return {
        isError: false,
        data: seasonData.seasonID,
      }
    } catch {
      return {
        isError: true,
        data: null,
      }
    }

    return { isError: false, data: 1 }
  }
}
