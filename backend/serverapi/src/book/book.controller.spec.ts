import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';

describe('Book Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [BookController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: BookController = module.get<BookController>(BookController);
    expect(controller).toBeDefined();
  });
});
