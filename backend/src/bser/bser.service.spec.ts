import { Test, TestingModule } from '@nestjs/testing';
import { BserService } from './bser.service';

describe('BserService', () => {
  let service: BserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BserService],
    }).compile();

    service = module.get<BserService>(BserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
