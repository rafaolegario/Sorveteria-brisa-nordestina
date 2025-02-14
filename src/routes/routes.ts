import express from 'express'
import { IceCreamController } from '../controllers/IceCreamController'


const router = express.Router()

router.get("/", IceCreamController.getIceCreams)


export { router }