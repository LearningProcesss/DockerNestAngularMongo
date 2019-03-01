import { Controller, Get, Response, Request, HttpStatus, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { IBook } from './book.interface';
import { IHttpRestParams } from "src/middleware/interface/IHttpRestParams";
import { EsService } from 'src/es/esservice';


@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService, private readonly logService: EsService) { }

    @Get()
    public async getBooks(@Request() req, @Response() res, @Query() param: IHttpRestParams) {
        
        this.logService.log("logs-method", "method", "getBooks", req.aggregator, 1);
        
        const books = req.aggregator === null || req.aggregator === undefined || req.aggregator.length == 0 ? await this.bookService.findAll() : await this.bookService.aggregate(req.aggregator);

        return res.status(HttpStatus.OK).json(books);
    }

    @Get("/:id")
    public async getBook(@Response() res, @Param() param) {
        const bookDb = await this.bookService.findById(param.id);
        return res.status(HttpStatus.OK).json(bookDb);
    }

    @Put("/:id")
    public async updateBook(@Response() res, @Body() bookHttp: IBook, @Param() param) {
        const bookDb = await this.bookService.update(param.id, bookHttp);
        return res.status(HttpStatus.OK).json(bookDb);
    }

    @Post()
    public async createBook(@Response() res, @Body() bookHttp: IBook) {
        const bookDb = await this.bookService.create(bookHttp);
        return res.status(HttpStatus.OK).json(bookDb);
    }

    @Delete("/:id")
    public async deleteBook(@Response() res, @Param() param) {
        const bookDb = await this.bookService.delete(param.id);
        return res.status(HttpStatus.OK).json(bookDb);
    }
}
