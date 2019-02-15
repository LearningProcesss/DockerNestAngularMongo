export interface IBook  {
    _id: string;
    titolo: string;
    autore: string;
    costo: number;
}

export class Book implements IBook {
    constructor(public _id: string, public titolo: string, public autore: string, public costo: number) {}
}