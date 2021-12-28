const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
});

export default mongoose.model("User", UserSchema);
