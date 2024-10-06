import { Router } from "express";
import { BookModel } from "../schema/book.js";

const BookRouter = Router()

BookRouter.post('/', async (req, res) => {
    console.log("책 등록 시작")
    const data = {
        title: req.body.title,
        publisher: req.body.publisher
    }

    const result = await BookModel.create(data);

    if(result) {
        console.log('책 등록 성공')
        res.send({
            message: "성공적으로 등록되었습니다",
            book_title: result.title,
        })
    }
})


export default BookRouter;