import {
  addAdvertisement,
  findAdvertisementById,
} from "../db/model/Advertisement.js";
import { findBookById } from "../db/model/Book.js";

export const addAdvertisementHandler = (req, res) => {
  const { bookId, imageUrl, price, city, description, phoneNumber } = req.body;
  addAdvertisement({
    bookId,
    imageUrl,
    price,
    city,
    description,
    phoneNumber,
  }).then((data) => res.json({ result: "done", data }));
};

export const getAdvertisementHandler = (req, res) => {
  const { id } = req.body;
  findAdvertisementById(id).then((adv) =>
    findBookById(adv.bookId).then((book) =>
      res.json({ ...adv._doc, title: book.title })
    )
  );
};
