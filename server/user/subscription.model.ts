import mongoose, { model, Schema } from "mongoose";

type Subscription = {
    userId: object,
    stripeCustomerId: string
    stripeSubscriptionId: string
    stripePriceId: string
    stripeCurrentPeriodEnd: Date
}

const SubscriptionSchema = new Schema<Subscription>({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    stripeCustomerId:{
        type:String,
        unique:true,
        index:true
    },
    stripeSubscriptionId:{
        type:String,
        unique:true,
        index:true
    },
    stripePriceId:{
        type:String,
    },
    stripeCurrentPeriodEnd:{
        type:Date
    }
})

const Subscription = model("Subscription", SubscriptionSchema)

export default Subscription