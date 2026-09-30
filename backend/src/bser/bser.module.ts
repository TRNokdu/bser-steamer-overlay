import { Module } from '@nestjs/common';
import { BserService } from './bser.service';

@Module({
  providers: [BserService]
})
export class BserModule {}
