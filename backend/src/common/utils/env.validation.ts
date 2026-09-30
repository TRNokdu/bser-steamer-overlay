import { plainToInstance } from 'class-transformer'
import { validateSync } from 'class-validator'
import { envDto } from '../dto/Env.dto'

export function validateEnv(config: Record<string, unknown>): envDto {
  const validateConfig = plainToInstance(envDto, config, {
    enableImplicitConversion: true,
  })
  const errors = validateSync(validateConfig)
  if (errors.length > 0) {
    throw new Error(errors.toString())
  }
  return validateConfig
}
