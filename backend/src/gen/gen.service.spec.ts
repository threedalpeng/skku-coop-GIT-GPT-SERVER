import { Test, TestingModule } from '@nestjs/testing';
import { GenService } from './gen.service';

describe('GenService', () => {
  let service: GenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenService],
    }).compile();

    service = module.get<GenService>(GenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
