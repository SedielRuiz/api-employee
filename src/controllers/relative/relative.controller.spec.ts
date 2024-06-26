import { Test, TestingModule } from '@nestjs/testing';
import { RelativeController } from './relative.controller';
import { RelativeModule } from 'src/modules/relative.module';

describe('RelativeController', () => {
  let controller: RelativeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelativeModule],
    }).compile();

    controller = module.get<RelativeController>(RelativeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
