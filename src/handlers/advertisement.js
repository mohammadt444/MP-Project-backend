import {
  addAdvertisement,
  findAdvertisementById,
} from "../db/model/Advertisement.js";

export const addAdvertisementHandler = (req, res) => {
  const { bookId, imageUrl, price, city, description, phoneNumber } = req.body;
  addAdvertisement({
    bookId,
    imageUrl,
    price,
    city,
    description,
    phoneNumber,
  }).then((data) => res.json({ result: "ok" }));
};

export const getAdvertisementHandler = (req, res) => {
  const { id } = req.body;
  findAdvertisementById(id).then((data) => res.json(data));
};
