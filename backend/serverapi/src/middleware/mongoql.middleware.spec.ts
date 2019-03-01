import { MongoqlMiddleware } from './mongoql.middleware';

describe('MongoqlMiddleware', () => {
  it('should be defined', () => {
    expect(new MongoqlMiddleware()).toBeTruthy();
  });
});
