import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthGoardService } from './jwt-auth.goard.service';

describe('JwtAuthGoardService', () => {
  let service: JwtAuthGoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtAuthGoardService],
    }).compile();

    service = module.get<JwtAuthGoardService>(JwtAuthGoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
