import { Injectable } from '@nestjs/common'
import axios from 'axios'
import rateLimit from 'axios-rate-limit'

@Injectable()
export class BserService {
  private fetcher: axios.AxiosInstance

  constructor() {
    this.fetcher = rateLimit(
      axios.create({
        baseURL: 'https://open-api.bser.io/',
        timeout: 5000,
        headers: {
          'x-api-key': apiKey,
        },
      }),
      { maxRPS: 1 },
    )
  }
}
