import mongoose from "mongoose";

const duckupSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  }
});

const Duckup = mongoose.model("Duckup", duckupSchema);

export default Duckup;