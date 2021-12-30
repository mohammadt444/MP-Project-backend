import mongoose from "mongoose";
import { findBookById } from "./Book.js";
const { model, Schema } = mongoose;

const AdvertisementSchema = Schema({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  title: String,
  imageUrl: String,
  price: Number,
  city: String,
  description: String,
  phoneNumber: String,
  time: {
    type: Date,
    default: Date.now(),
  },
});

const Advertisement = model("Advertisement", AdvertisementSchema);

export const findAdvertisementByBookId = (bookId) =>
  Advertisement.find({ bookId }).exec();

export const addAdvertisement = ({
  bookId,
  imageUrl,
  price,
  city,
  description,
  phoneNumber,
}) =>
  findBookById(bookId).then((book) =>
    new Advertisement({
      title: book.title,
      bookId,
      imageUrl,
      price,
      city,
      description,
      phoneNumber,
    }).save()
  );

export const getAdvertisements = () => Advertisement.find().exec();

export const findAdvertisementById = (_id) =>
  Advertisement.findById(_id).exec();

export default Advertisement;
