const mongoose=require("mongoose")
const transcriptSchema=new mongoose.Schema({
user_id:{type:String},
name:{type:String,unique:true,required:true},
body:{type:Object},

},
{timestamps:true}
)
module.exports=mongoose.model("Transcript", transcriptSchema)