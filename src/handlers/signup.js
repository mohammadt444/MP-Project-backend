import { addUser, getUser } from "../db/model/User.js";

export default (req, res) => {
  const { email, password } = req.body;
  getUser(email).then((user) =>
    user
      ? res.json({ result: "exist" })
      : addUser({ email, password }).then(() => res.json({ result: "done" }))
  );
};
