import { Request, Response } from "express";
import { admin } from "../model/adminUser";
import jwt from "jsonwebtoken";

export const LoginController = {
    login: (req: Request, res: Response)=>{
        const { username, password } = req.body

        const Admin = admin.find(adm => adm.username === username)

        if(!Admin || Admin.password !== password){
             res.status(401).json({message:"Unauthorized"})
             return
        }

        const SECRET_KEY = process.env.SECRET_KEY
        const token = jwt.sign({ username: Admin.username},SECRET_KEY as string,{
            expiresIn : '72h'
        })

        res.redirect('/protected/admin')
        res.json({ token })
    }
}