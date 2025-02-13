import express from 'express'
import { IceCreamController } from './controllers/IceCreamController'


const router = express.Router()

router.get("/", IceCreamController.getIceCreams)
router.get('/admin', IceCreamController.getIceCreams)
router.post("/admin/save", IceCreamController.saveIceCream)
router.delete("/admin/delete/:id", IceCreamController.deleteIceCream)
router.patch("/admin/update/:id", IceCreamController.updateIceCream)

export { router }