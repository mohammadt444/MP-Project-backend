import { addAdvertisement } from "../db/model/Advertisement.js";

export default (req, res) => {
  const { bookId, imageUrl, price, city, description, phoneNumber } = req.body;
  addAdvertisement({ bookId, imageUrl, price, city, description, phoneNumber });
};
