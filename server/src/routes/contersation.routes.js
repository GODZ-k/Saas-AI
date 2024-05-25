import { Router } from "express";
import { conversation } from "../controllers/conversation.controller.js";
const router = Router()


router.route('/converation').post(conversation)


export default router