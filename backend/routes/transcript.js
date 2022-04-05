
const transcript = require("../models/transcript");
const Transcript=require("../models/transcript")
const router=require("express").Router();
const {verifyTokenAndAdmin}=require("./verifyToken")
const {verifyTokenAndAuthorization}=require("./verifyToken")

router.post("/new",async (req,res)=>{
    const newTranscript= await new Transcript({
    name:req.body.name,
    user_id:req.body.user_id,
    body:req.body.body
    
    
    
    
    })
    
    try{
        const savedTranscript=await newTranscript.save()
        res.status(201).json(savedTranscript)
    }catch(err){
    res.status(404).json("error")
    }
    
    })

//update
router.put("/:id", async(req,res)=>{
    try{
    const id=req.params.id
    const updates=req.body
    const options={new:true}
    const updatedTranscript= await Transcript.findByIdAndUpdate(id,updates,options)
    res.status(200).json(updatedTranscript)
    }
    catch(err){
        res.status(500).json("error")
    
    }
    
    })
 //delete user

 router.delete("/:id", async(req,res)=>{
    try{
        res.status(200).json("post succesfully deleted")
return await Transcript.findByIdAndDelete(req.params.id)


    }
    catch(err){
        res.status(404).json("record not found")

    }

    
})

//find by id
    
router.get("/find/:id", async (req,res)=>{
    try{
const transcript = await Transcript.findById(req.params.id)
res.status(200).json(transcript)
    }
    catch(err){
res.json(err)
    }
})

//find all
router.get("/", async(req,res)=>{
    try{
        const transcript=await Transcript.find()
        res.status(200).json(transcript)
    }
    catch(err){
        res.status(404).json(err)
    }
})









    module.exports=router