import stripe from 'stripe'

const Stripe = new stripe(process.env.STRIPE_SECRET_KEY as string,{
    apiVersion:'2024-04-10',
    typescript:true
})