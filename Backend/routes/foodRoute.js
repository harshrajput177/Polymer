import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodcontroller.js"; // Ensure the extension is included
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads", // Ensure the 'uploads' directory exists
    filename: (req, file, cb) => {
        cb(null, `${Date.now()} ${file.originalname}`); // Use hyphen instead of space
    }
});

const upload = multer({ storage:storage });

foodRouter.post("/add", upload.single("image"), addFood); // Use 'post' for defining the route
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);










export default foodRouter;
