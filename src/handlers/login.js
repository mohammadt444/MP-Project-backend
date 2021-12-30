import { getUser } from "../db/model/User.js";

export default (req, res) => {
  const { email, password } = req.body;
  getUser(email).then((user) =>
    user
      ? user.password === password
        ? res.json({ result: "done" })
        : res.json({ result: "wrong password" })
      : res.json({ result: "not exist" })
  );
};
