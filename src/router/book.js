import { Router } from "express";
import { BookModel } from "../schema/book.js";
import { PublisherModel } from "../schema/publisher.js";

const BookRouter = Router()

BookRouter.post('/', async (req, res) => {
    const { title, publisher } = req.body;

    const newBook = await BookModel.create({ title, publisher });

    if (newBook){
        console.log('책 등록 성공')

        const publisherRecord = await PublisherModel.findOne({ name: publisher })

        if (publisherRecord) {
            publisherRecord.publushertitle.push(title)
            await publisherRecord.save()
            console.log('출판사 정보 업데이트 성공')

            return res.send({
                message : '성공적으로 등록되었습니다',
                title: newBook.title
            })
        }
    }
})


export default BookRouter;