import mongoose from "mongoose";

const duckupSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Duckup = mongoose.model("Duckup", duckupSchema);

export default Duckup;