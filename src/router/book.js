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
            publisherRecord.publisherTitle.push(title)
            await publisherRecord.save()
            console.log('출판사 정보 업데이트 성공')

            return res.send({
                message : '성공적으로 등록되었습니다',
                title: newBook.title
            })
        }
    }
})

BookRouter.get('/:title', async (req, res) => {
    console.log('책 제목 조회 시작')
    const { title } = req.params
    const bookRecord = await BookModel.findOne({ title });
    return res.send({
        message: "성공적으로 조회되었습니다",
        title: bookRecord.title,
        publisher: bookRecord.publisher
    })
})

BookRouter.patch('/:title', async (req, res) => {
    console.log('책 제목 수정')
    const { title, publisher } = req.body;
    const updatedBook = await BookModel.findOneAndUpdate({ title })
    if (updatedTitle) {
        return res.send({
        message: '성공적으로 수정되었습니다',
        title: updatedBook.title,
        })
    }
})


BookRouter.delete('/:title', async (req, res) => {
    console.log('책 제목 삭제')
    const { title } = req.params
    const deletedBook = await BookModel.findOneAndDelete({ title });
    if (deletedBook) {
        return res.send({
            message: '성공적으로 삭제되었습니다',
            title: deletedBook.title,
        })
    }
})

export default BookRouter;