import mongoose from 'mongoose';

const PublisherSchema = new mongoose.Schema({
    name : { type : String, required: true }, // 출판사
    publushertitle : { type : Array } //출판물제목
})

const PublisherModel = mongoose.model('Publisher', PublisherSchema);

export { PublisherModel, PublisherSchema };