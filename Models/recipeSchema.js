import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  prepTime: { type: Number, required: true },
});

//create collection

const recipes = mongoose.model("recipes", recipeSchema);

export default recipes;
