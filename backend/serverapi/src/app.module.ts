import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { BookController } from './book/book.controller';
import { BooksService } from './books/books.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.mongodburi),
    BooksModule],
  controllers: [AppController, BookController],
  providers: [AppService],
})
export class AppModule { }
