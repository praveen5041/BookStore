const mongoose=require('mongoose')
const Schema=mongoose.Schema
const bookSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("book",bookSchema)