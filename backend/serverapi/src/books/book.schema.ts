import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    titolo: String,
    autore: String,
    descrizione: String,
    costo: Number
});