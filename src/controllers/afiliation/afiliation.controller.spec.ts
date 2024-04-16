import { Test, TestingModule } from '@nestjs/testing';
import { AfiliationController } from './afiliation.controller';

describe('AfiliationController', () => {
  let controller: AfiliationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AfiliationController],
    }).compile();

    controller = module.get<AfiliationController>(AfiliationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
