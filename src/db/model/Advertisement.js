import { Schema, model } from "mongoose";

const AdvertisementSchema = Schema({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  imageUrl: String,
  price: Number,
  city: String,
  description: String,
  phoneNumber: String,
});

const Advertisement = model("Advertisement", AdvertisementSchema);

export const findAdvertisementByBookId = (bookId) =>
  Advertisement.findOne({ bookId }).exec();

export const addAdvertisement = ({
  bookId,
  imageUrl,
  price,
  city,
  description,
  phoneNumber,
}) =>
  new Advertisement({
    bookId,
    imageUrl,
    price,
    city,
    description,
    phoneNumber,
  }).save();

export const getAdvertisements = () => Advertisement.find().exec();

export const findAdvertisementById = (_id) =>
  Advertisement.findById(_id).exec();

export default Advertisement;
