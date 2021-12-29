import { getUser } from "../db/model/User.js";

export default (req, res) => {
  const { email, password } = req.body;
  getUser(email).then((data) => res.json(data));
};
