import express from 'express'
import { router } from './routes/routes'
import { protectedRouter } from './routes/protected';
import { authRouter } from './routes/auth';
import dotenv from "dotenv";
import path = require('node:path');
import cookieParser from "cookie-parser";

dotenv.config();
const app = express()
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "../public")))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))
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