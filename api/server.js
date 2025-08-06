import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import axios from "axios"
import nodemailer from "nodemailer"

const app = express();
const port = process.env.Port || 3000

app.use(cors())
app.use(express.json())

const mongoUri =`mongodb+srv://nitish:nitish@cluster0.yjpsvr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(mongoUri).then(()=>{
    console.log("concceted to mongodb")
}).catch(Err=>{
    console.log("mongo db error",Err);
    process.exit(1)
})


app.listen(port,()=>{
    console.log("sercer is running ",port)
})