const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
const router = require("./routes/Book_route");
app.use(express.json())
app.use(cors())
app.use("/books", router);

require('dotenv').config()

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Database connected"))
.then(()=>{
    app.listen(5000)
})
.catch((err)=>console.log(err))