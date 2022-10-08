const mongoose=require('mongoose')

//Schema
const Schema = mongoose.Schema
const RecipePostSchema=new Schema({
    name:String,
    ingredents:String,
    prep:String,
    cook:String
})
//Model
const RecipePost=mongoose.model('RecipePost',RecipePostSchema)

module.exports=RecipePost