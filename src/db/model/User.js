import mongoose from "mongoose";
const { model, Schema } = mongoose;

const UserSchema = Schema({
  email: String,
  password: String,
});

const User = model("User", UserSchema);

export const getUser = (email) => User.findOne({ email }).exec();

export const addUser = ({ email, password }) =>
  new User({ email, password }).save();

export default User;
