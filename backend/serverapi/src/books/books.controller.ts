import { Controller, Get, Response, HttpStatus, Post, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { IBook } from './book.interface';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) { }

    @Get()
    public async getBooks(@Response() res) {
        const books = await this.bookService.findAll();
        return res.status(HttpStatus.OK).json(books);
    }

    @Get("/:id")
    public async getBook(@Response() res, @Param() param){
        const book = await this.bookService.findById(param.id);
        return res.status(HttpStatus.OK).json(book);
    }

    @Post()
    public async createBook(@Response() res, @Body() bookHttp: IBook) {
        const bookDb = await this.bookService.create(bookHttp);
        return res.status(HttpStatus.OK).json(bookDb);
    }
}
