import { IBook } from './book.interface';

export interface IBookService {
    findAll(): Promise<IBook[]>;
    findById(ID: number): Promise<IBook | null>;
    findOne(options: object): Promise<IBook | null>;
    create(todos: IBook): Promise<IBook>;
    update(ID: number, newValue: IBook): Promise<IBook | null>;
    delete(ID: number): Promise<IBook>;
}