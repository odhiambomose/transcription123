const mongoose=require("mongoose")
const dotenv=require("dotenv")
const express=require("express")
const cors=require("cors")
const userRoutes=require("./routes/user")
const  authRoutes =require("./routes/auth")
const transcriptRoutes=require("./routes/transcript")



const app=express()
const PORT=process.env.PORT || 8000


dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("DB connected")
})
.catch((err)=>{
    console.log(err)
})

app.use(express.json())
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})
const corsOptions={
origin:"*"

}
app.use(cors(corsOptions))

app.use("/api/user",userRoutes)

app.use("/api/auth",authRoutes)

app.use("/api/transcript",transcriptRoutes)