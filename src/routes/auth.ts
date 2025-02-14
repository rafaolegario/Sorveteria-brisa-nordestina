import express from 'express'

import { LoginController } from '../controllers/loginContoller'


const authRouter = express.Router()

authRouter.post('/login',LoginController.login )

export { authRouter }