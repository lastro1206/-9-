import mongoose from 'mongoose';

const PublisherSchema = new mongoose.Schema({
    name : { type : String, required: true }, // 출판사
    title : { type : Array } //출판물제목
})

const PublisherModel = mongoose.model('Publisher', PublisherSchema);

export { PublisherModel, PublisherSchema };