import { Document } from 'mongoose';

export interface IBook extends Document {
    readonly titolo: String,
    readonly autore: String,
    readonly descrizione: String,
    readonly costo: Number
}