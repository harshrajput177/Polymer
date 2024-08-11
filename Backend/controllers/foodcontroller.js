import FoodModel from "../models/FoodModel.js";
import fs from "fs";

// add food itmes
const addFood = async(req, res)=>{
    let image_filename = `${req.file.filename}`;

    const food = new FoodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
         // Uses res.json(...) to send a JSON response back to the client 
        res.json({success:true , message:"Added food"})

    }catch(error){
        console.log(error);
        res.json({success:false , message:"error"})
    }
}


//food list display
const listFood = async(req,res)=>{
  try{
    const foods = await FoodModel.find({});
    res.json({success:true ,data:foods})

  }catch(error){
        console.log(error);
        res.json({success:false , message:"error"})
  }
}

//remove items from list
const removeFood = async(req,res)=>{
    try{
        const food = await FoodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})

        await FoodModel.findByIdAndDelete(req.body.id);
         // Uses res.json(...) to send a JSON response back to the client 
         res.json({success:true, message:"Food removed"});
         
    }catch(error){
        res.json({success:false, message:"error"}); 
    }
}

export {addFood, listFood, removeFood};