import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title : { type: String, required: true }, //책 제목
    publisher : { type: String, required: true } //출판사 명
})

const BookModel = mongoose.model('Book', BookSchema);

export { BookModel, BookSchema };