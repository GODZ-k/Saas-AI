import { Router } from "express";
import conversationRoute from './contersation.routes.js'
const router =  Router()


router.use('/conversation' , conversationRoute)

export default router