import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title : { type: String, required: true },
    publisher : { type: String, required: true }
})

const BookModel = mongoose.model('Book', BookSchema);

export { BookModel, BookSchema };