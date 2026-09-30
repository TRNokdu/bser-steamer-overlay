import { IsString } from 'class-validator'

export class envDto {
  @IsString()
  BSER_API_KEY: string
}
