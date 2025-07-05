import jwt from "jsonwebtoken"

const JWT_SECRET =process.env.JWT_SECRET || "yoursecretkey"

export function authinticateJWT (req,res,next){
    const authHeader=req.headers.authorization;

    if(authHeader){
        
    }
}