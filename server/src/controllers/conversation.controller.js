import {openai} from "../openai/OpenAi.js";


const conversation = async(req,res)=>{
    try {
        const {userId} = auth()
        const body = await req.json()
        const {messages} = body

        if(!userId){
            return res.status(422).json({
                msg:"Unauthorized"
            })
        }

        if(!messages){
            return res.status(400).json({
                msg:"Messages are rquired"
            })
        }

        const response  = await openai.chat.completions.create({
            messages,
            model: 'gpt-3.5-turbo',
        })

        return res.status(200).json({
            data:response.choices[0].message,
            msg:"data fetched successfully"
        })
    } catch (error) {
        console.log("conversation error" , error)
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}



export {
    conversation
}