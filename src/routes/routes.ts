import express from 'express'
import { IceCreamController } from '../controllers/IceCreamController'


const router = express.Router()

router.get("/", async (req, res) =>{
    
    const products = await IceCreamController.getIceCreams(req, res)
    return res.render('cardapio',{products})
})


export { router }