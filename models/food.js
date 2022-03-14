const mongoose = require("mongoose");

const schema = mongoose.Schema;
const foodSchema = new schema({
  name: String,
  price: String,
  calories: Number,
  coocked: { type: Boolean, default: false },
});

const Food = mongoose.model("food", foodSchema);

module.exports = Food;
