import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BookSchema } from './book.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './books.service';
import { EsService } from 'src/es/esservice';
import { EsModule } from 'src/es/es.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
    EsModule
  ],
  providers: [BooksService, EsService],
  controllers: [BooksController],
  exports: []
})
export class BooksModule { }
