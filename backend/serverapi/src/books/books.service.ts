import { Injectable } from '@nestjs/common';
import { Model, Aggregate } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IBook } from './book.interface';
import { IBookService } from './book.service.interface';

@Injectable()
export class BooksService implements IBookService {

    constructor(@InjectModel('Book') private readonly bookModel: Model<IBook>) { }

    async aggregate(aggregate: any): Promise<IBook[]> {
        return await this.bookModel.aggregate(aggregate);
    }

    async findAll(): Promise<IBook[]> {
        return await this.bookModel.find();
    }
    async findById(ID: string): Promise<IBook> {
        return await this.bookModel.findById(ID);
    }
    findOne(options: object): Promise<IBook> {
        throw new Error("Method not implemented.");
    }
    async create(book: IBook): Promise<IBook> {
        const bookDb = new this.bookModel(book);
        return await bookDb.save();
    }
    async update(ID: string, newValue: IBook): Promise<IBook> {
        return await this.bookModel.findByIdAndUpdate({ _id: ID }, newValue);
    }
    async delete(ID: string): Promise<IBook> {
        return await this.bookModel.findOneAndDelete({ _id: ID });
    }
}
