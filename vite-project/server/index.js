import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import student from "./models/User.js"
import {body,validationResult} from 'express-validator'
import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

mongoose.connect("mongodb://localhost:27017/User")

app.post('/register',
    [
        body('name',"Name must be at least 3 characters").isLength({min:3}),
        body('email',"Enter a valid Email").isEmail(),
        body('password',"Password must be at least 6 characters").isLength({min:6})
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        student.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        .then(() => res.send("Data inserted"))
        .catch(err => res.status(500).send("Error inserting data"));
    }
)

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    student.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("Password is Incorrect!");
            }
        }
        else{
            res.json("No Record Existed!");
        }
    })
    
})

app.post('/code-editor',async (req,res)=>{
    const {script,language,versionIndex}=req.body;
    const payLoad={
        clientId:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        script,
        language,
        versionIndex,
    };

    try{
        const response=await axios.post("https://api.jdoodle.com/v1/execute",payLoad);
        res.json(response.data);
    }
    catch(err){
        res.status(500).json({error:"Execution Failed",details:err.message});
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
