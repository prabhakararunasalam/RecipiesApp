import recipes from "../Models/recipeSchema.js";

export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new recipes(req.body);
    await newRecipe.save();
    res
      .status(200)
      .json({ message: "Product added Successfully", data: newRecipe });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create recipe", error: error.message });
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const getRecipes = await recipes.find();
    res
      .status(200)
      .json({ message: "All Recipes Retrived Successfully", data: getRecipes });
  } catch (error) {
    res.status(500).json({ message: "recipes not found" });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await recipes.findById(recipeId);
    if (!recipe) {
      return res.status(200).json({ message: "product Not Found" });
    }

    res
      .status(200)
      .json({ message: "recipe retrived successfully", data: recipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    // const {name , price, ingredient, instruction, prepTime} = req.body;
    const recipe = await recipes.findByIdAndUpdate(recipeId, req.body, {
      new: true,
    });

    if (!recipe) {
      return res.status(400).json({ message: "Recipe Not Found" });
    }

    res
      .status(200)
      .json({ message: "Recipe Updated Successfully", data: recipe });
  } catch (error) {
    res.status(400).json({message:error.message});
  }
};

export const deleteRecipe = async (req, res) =>{
  try {
    const recipeId = req.params.id;
    const recipe = await recipes.findByIdAndDelete(recipeId);

    if(!recipe){
      return res.status(400).json({message:"Recipe Not Found"});
    }

    res.status(200).json({message:"Recipe Deleted Successfully"});
  } catch (error) {
    res.status(400).json({message:error.message});
  }
}