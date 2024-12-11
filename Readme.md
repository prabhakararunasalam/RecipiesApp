# Recipes App

## Description

A CRUD application for managing recipes using Node.js, Express.js, and MongoDB.This app allows users to create, view, update, and delete recipes.

## Features

- Create new recipes: Add a new recipe with name, ingredients, instructions, and preparation time.
- View all recipes: Retrieve a list of all recipes stored in the database.
- View a single recipe: Fetch a specific recipe by its ID.
- Update recipes: Modify existing recipes using the recipe ID.
- Delete recipes: Remove recipes from the database by ID.

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)

## API Endpoints

1. Create a Recipe (POST)
   Endpoint: /api/recipes/create
   Description: Create a new recipe.

2. Get All Recipes (GET)
   Endpoint: /api/recipes/getrecipe
   Description: Retrieve all recipes.

3. Get Recipe By ID (GET)
   Endpoint: /api/recipes/getrecipe/:id
   Description: Get a specific recipe by its unique ID.

4. Update Recipe By ID (PUT)
   Endpoint: /api/recipes/updatebyid/:id
   Description: Update an existing recipe using its ID.

5. Delete Recipe By ID (DELETE)
   Endpoint: /api/recipes/delete/:id
   Description: Delete a recipe from the database using its ID.

## Deployed URL

https://documenter.getpostman.com/view/39189138/2sAYHwKQxN
