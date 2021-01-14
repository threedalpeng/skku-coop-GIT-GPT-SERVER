import { Test, TestingModule } from '@nestjs/testing';
import { GenController } from './gen.controller';

describe('GenController', () => {
  let controller: GenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenController],
    }).compile();

    controller = module.get<GenController>(GenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
