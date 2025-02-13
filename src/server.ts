import express from 'express'
import { router } from './routes'

const app = express()
app.use(express.json());
app.use("/Brisanordestina",router)
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 3000
app.listen(PORT)