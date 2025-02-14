import express from 'express'
import { router } from './routes/routes'
import { protectedRouter } from './routes/protected';
import { authRouter } from './routes/auth';
import dotenv from "dotenv";

dotenv.config();
const app = express()
app.use(express.json());
app.use("/Brisanordestina",router)
app.use(express.urlencoded({extended:true}))
app.use("/Brisanordestina",router)
app.use("/auth", authRouter)
app.use("/protected", protectedRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(PORT)
})