import { Test, TestingModule } from '@nestjs/testing';
import { AfiliationController } from './afiliation.controller';
import { AfiliationModule } from 'src/modules/afiliation.module';

describe('AfiliationController', () => {
  let controller: AfiliationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AfiliationModule],
    }).compile();

    controller = module.get<AfiliationController>(AfiliationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
