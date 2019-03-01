import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { MongoqlMiddleware } from './middleware/mongoql.middleware';
import { BookSchema } from './books/book.schema';
import { BooksController } from './books/books.controller';
import { EsModule } from './es/es.module';
import { EsService } from './es/esservice';
import { LogMiddleware } from './logmiddleware/log.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.mongodburi),
    EsModule,
    BooksModule
  ],
  providers: [EsService],
  exports: [EsModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MongoqlMiddleware, LogMiddleware)
      .with(
        {
          model: BookSchema,
          path: "books"
        }
      )
      .forRoutes(BooksController);
  }
}
