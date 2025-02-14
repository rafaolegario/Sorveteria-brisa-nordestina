import express from 'express'
import { IceCreamController } from '../controllers/IceCreamController'
import { authMiddleware } from '../middlewares/authMiddlewate'

const protectedRouter = express.Router()

protectedRouter.get('/admin',authMiddleware, IceCreamController.getIceCreams)
protectedRouter.post("/admin/save",authMiddleware, IceCreamController.saveIceCream)
protectedRouter.delete("/admin/delete/:id",authMiddleware, IceCreamController.deleteIceCream)
protectedRouter.patch("/admin/update/:id",authMiddleware,IceCreamController.updateIceCream)

export { protectedRouter }