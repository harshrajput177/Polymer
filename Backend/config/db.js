import mongoose from "mongoose"
 export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://harshrajput30411:gh1hxeXFWkCFvGeI@polymers.y29in.mongodb.net/?retryWrites=true&w=majority&appName=Polymers')
    .then(()=>
        console.log("connect to  db")
    )
}