import { Test, TestingModule } from '@nestjs/testing';
import { UsersAddressesResolver } from './users-addresses.resolver';

describe('UsersAddressesResolver', () => {
  let resolver: UsersAddressesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersAddressesResolver],
    }).compile();

    resolver = module.get<UsersAddressesResolver>(UsersAddressesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
