import { Test, TestingModule } from '@nestjs/testing';
import { LocalGuardService } from './local-guard.service';

describe('LocalGuardService', () => {
  let service: LocalGuardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalGuardService],
    }).compile();

    service = module.get<LocalGuardService>(LocalGuardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
