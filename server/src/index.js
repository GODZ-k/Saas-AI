import express from 'express'
import dotenv from 'dotenv'
import OpenAI from 'openai'

import mainRouter from './routes/main.routes.js'
const app = express()

dotenv.config({
    path:"./.env"
})




app.use(express.json())
app.use(express.urlencoded({
extended:false
}))

// open ai -----

export const openai = new OpenAI({
    apiKey:process.env.OPENAI_SECRET_KEY
}) 


// routes --
app.use('/api/v1', mainRouter)


app.listen(3000)