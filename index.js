import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Database/dbConfig.js";
import recipeRouter from "./Routers/recipeRouter.js"
//dotsnv config

dotenv.config();

//express initialize
const app = express();

//default middleware for req.body
app.use(express.json());

//middleware cors

app.use(
  cors({
    origin: "*",// Allow all origins
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

connectDB();



//port decleration custom port
app.get("/", (req, res) => {
  res.status(200).send("welcome to Api");
});


//default Router
app.use("/api/recipes",recipeRouter);
//port declere

const Port = process.env.PORT || 5000;

//start the server
app.listen(Port, () => {
  console.log(`port is started and running sucessfully:${Port}`);
});
