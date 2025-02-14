import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { admin } from "../model/adminUser";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void =>{
    const authHeader = req.headers.authorization
    if(!authHeader){
        res.status(401).json({message:"Unauthorized"})
        res.redirect('/auth/login')
        return
    }

    const token = authHeader.split(' ')[1]

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY! ) as JwtPayload
        const Admin = admin.find(adm => adm.username == decodedToken.username )

        if(!Admin){  
            res.status(401).json({message:'Invalid Token'})
            res.redirect('/auth/login')
            return
        }
        
    } catch (error) {
        res.status(401).json({message:'invalid token'})
        res.redirect('/auth/login')
    }
    next()
}