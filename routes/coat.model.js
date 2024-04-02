const express = require('express')

const {coatModel} = require("../model/coat.model")

const coatRouter = express.Router()


coatRouter.post("/",async(req,res)=>{
    try{
         const {id,top,title,images,description,price,rating,discount,category,color,Stock,size}=req.body
         const newcoat = await coatModel ({id,top,title,images,description,price,rating,discount,category,color,Stock,size})
         await newcoat.save()
         res.status(201).json({msg:"Coats are stored sucessfully..."})
    }
    catch(err){
        console.log(err)
        res.status(501).json({msg:"Something Went Wrong To Posting The Details Of Coats"})
    }
})

coatRouter.get('/',async(req,res)=>{
    try{
        const getdata = await coatModel.find()
        res.status(201).json({msg:"All the Coat Products are Here...",getdata})

    }
    catch(err){
        console.log('Something went wrong')
        res.status(501).json({msg:"Something went wrong to getting the Coat Data"})
    }
})


coatRouter.delete('/:id',async(req,res)=>{
    try {
        const { id } = req.params;

        const deletedProduct = await coatModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.status(200).json({ msg: "Product deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
})






module.exports = {
    coatRouter
}