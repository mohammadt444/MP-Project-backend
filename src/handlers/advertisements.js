import {
  findAdvertisementByBookId,
  getAdvertisements,
} from "../db/model/Advertisement.js";

export default (req, res) => {
  const { id: BookId } = req.body;
  if (BookId) {
    findAdvertisementByBookId(BookId).then((data) => res.json(data));
  } else {
    getAdvertisements().then((data) => res.json(data));
  }
};
