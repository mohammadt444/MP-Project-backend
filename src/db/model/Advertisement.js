const mongoose = require("mongoose");

const AdvertisementSchema = mongoose.Schema({
  bookId: String,
  imageUrl: String,
  price: Number,
  city: String,
  description: String,
  phoneNumber: String,
});

export default mongoose.model("Advertisements", AdvertisementSchema);
