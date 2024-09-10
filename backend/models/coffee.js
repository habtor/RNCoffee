import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  addon: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  size: {
    type: String,
    required: true,
    enum: ["S", "M", "L"],
    default: "M",
  },
  rating: { type: Number, required: false },
  numReviews: { type: Number, required: false },
  count: { type: Number, required: false },
});

const Coffee = mongoose.model("Coffee", coffeeSchema);

export default Coffee;
