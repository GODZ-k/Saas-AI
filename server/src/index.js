import express from 'express'
import dotenv from 'dotenv'
const app = express()

dotenv.config({
    path:'./.env'
})

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(6000)