import { Schema, model } from "mongoose";

const UserSchema = Schema({
  email: String,
  password: String,
});

export default model("User", UserSchema);
