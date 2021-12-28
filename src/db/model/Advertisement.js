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

export default model("Advertisement", AdvertisementSchema);
