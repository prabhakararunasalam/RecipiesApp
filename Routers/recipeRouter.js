import express from "express";
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from "../Controllers/recipeControllers.js";


const router = express.Router();

router.post("/create", createRecipe);
router.get("/getrecipe",getAllRecipes);
router.get("/getrecipe/:id", getRecipeById);
router.put("/updatebyid/:id",updateRecipe);
router.delete("/delete/:id",deleteRecipe);
export default router;