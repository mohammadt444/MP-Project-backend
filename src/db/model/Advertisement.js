const mongoose = require("mongoose");

const AdvertisementSchema = mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  imageUrl: String,
  price: Number,
  city: String,
  description: String,
  phoneNumber: String,
});

export default mongoose.model("Advertisements", AdvertisementSchema);
