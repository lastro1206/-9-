import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import BookRouter from './router/book.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/book', BookRouter);

app.listen(8000, () => { 
    console.log('8000번 포트 서버 실행됨');
});

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('MongoDB에 성공적으로 연결되었습니다.');
    })
    .catch((error) => {
        console.error('MongoDB 연결 중 오류 발생:', error);
    });
