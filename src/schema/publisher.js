import mongoose from 'mongoose';

const PublisherSchema = new mongoose.Schema({
    Publisher : { type : String, required: true },
    PublicationTitle : { type : Array, required: true }
})

const PublisherModel = mongoose.Schema('Publisher', PublisherSchema);

export { PublisherModel, PublisherSchema };