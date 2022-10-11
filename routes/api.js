const express=require('express')
const router=express.Router()
const RecipePost=require('../models/RecipePost')

router.get('/',(req,res)=>{

    RecipePost.find()
    .then((data)=>{
       console.log('Data: ',data)
        res.json(data)
    })
    .catch((error)=>{
        console.log('error',daerrorta)
})
})

router.post('/',(req,res)=>{
    RecipePost.create({
     name: req.body.name,
     ingredents:req.body.ingredents,
     prep:req.body.prep,
     cook:req.body.cook,
     
     }).then(doc =>console.log(doc))
     .catch((err)=>console.log(err));
     
 })

 router.route("/Mybook").get((req,res)=>{
    RecipePost.find()
        .then(foundRecipe => res.json(foundRecipe))
 })

 router.delete("/delete/:id",(req,res)=>{
    RecipePost.findByIdAndDelete({_id: req.params.id})
    .then(doc => console.log(doc))
    .catch((err)=>console.log(err))
    console.log(req.params)
 })

 router.put("/update/:id",(req,res)=>{
    console.log(req.params)
    console.log(req.body)
    RecipePost.findByIdAndUpdate({_id: req.params.id},{
        name: req.body.name,
        ingredents:req.body.ingredents,
        prep:req.body.prep,
        cook:req.body.cook
    })
    .then(doc => console.log(doc))
    .catch((err)=>console.log(err))
 })
 

module.exports=router