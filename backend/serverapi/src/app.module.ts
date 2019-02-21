import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { MongoqlMiddleware } from './mongoql.middleware';
import { BookSchema } from './books/book.schema';
import { BooksController } from './books/books.controller';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.mongodburi),
    BooksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MongoqlMiddleware)
      .with(
        {
          model: BookSchema,
          path: "books"
        }
      )
      .forRoutes(BooksController);
  }
}
