import { IBook } from './book.interface';

export interface IBookService {
    aggregate(aggregat: any): Promise<IBook[]>;
    findAll(): Promise<IBook[]>;
    findById(ID: string): Promise<IBook | null>;
    findOne(options: object): Promise<IBook | null>;
    create(todos: IBook): Promise<IBook>;
    update(ID: string, newValue: IBook): Promise<IBook | null>;
    delete(ID: string): Promise<IBook>;
}