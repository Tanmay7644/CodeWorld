import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import student from "./models/User.js"              // student dataset
import {body} from 'express-validator'              // it is a middleware that is used to validate the data that is being sent to the backend
import dotenv from 'dotenv'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import multer from 'multer'
import Note from './models/Note.js'
import Lecture from './models/Lecture.js'
import Groq from 'groq-sdk'
dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

const JWT_SECRET = process.env.JWT_SECRET || "yoursecretkey";

mongoose.connect(process.env.MONGODB_URI)

app.post('/register', 
    [
        body('name',"Name must be at least 3 characters").isLength({min:3}),
        body('email',"Enter a valid Email").isEmail(),
        body('password',"Password must be at least 6 characters").isLength({min:6})
    ]
    ,
    async(req,res)=>{
    const {name,email,password}=req.body;
    const hash=await bcrypt.hash(password,10);

    try{
        await student.create({name,email,password:hash,role:"student" });
        res.json({status:"Registered"});
    }
    catch(err){
        res.status(500).json({status:"Error",error:err.message})
    }
})

app.post('/login', async (req,res)=>{
    const {email,password}=req.body;

    const user=await student.findOne({email});
    if(!user){
        return res.json({status:"No Record Existed"});
    }

    let matchPassword=0;
        matchPassword=await bcrypt.compare(password,user.password);
        if(!matchPassword){
            return res.json({status: "Password is Incorrect"});
        }   
        const token=jwt.sign({id:user._id,role:user.role,name:user.name,email:user.email},JWT_SECRET,{expiresIn:"1h"});
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
        console.log("Response from JDoodle:", response.data);
        res.json(response.data);
    }
    catch(err){
        console.error("Error executing code:", err);
        res.status(500).json({error:"Execution Failed",details:err.message});
    }
})


// Set up storage for uploaded files
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
});

const upload = multer({ storage });


// Serve uploaded files statically
app.use('/uploads',express.static('uploads'));
// Makes files accessible via URL like http://localhost:3000/uploads/filename.pdf
// Without this, files are saved but cannot be accessed from browser


// this posting in databse is to store metadata because multer doesnt store metada
app.post('/upload/notes',upload.single('file'),async (req,res)=>{
    const {subject,topic,description}=req.body;
    const filename=req.file.filename;

    try{
        const note=await Note.create({filename,subject,topic,description});
        res.json({status:"Success",note});
    }
    catch (err){
        res.status(500).json({ error: err.message });
    }
})


app.post('/upload/lectures',upload.single('file'),async (req,res)=>{
    const {subject,topic,description}=req.body;
    const filename=req.file.filename;

    try{
        const lecture=await Lecture.create({filename,subject,topic,description});
        res.json({status:"Success",lecture});
    }
    catch (err){
        res.status(500).json({ error: err.message });
    }8
})


app.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find().sort({ uploadedAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/lectures', async (req, res) => {
  try {
    const lectures = await Lecture.find().sort({ uploadedAt: -1 });
    res.json(lectures);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post('/ai-assist', async (req, res) => {
  const { messages } = req.body;

  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY});

    // Remove the first assistant greeting message
    const filtered = messages.filter((m, i) => 
      !(i === 0 && m.role === 'assistant')
    );

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        { 
          role: "system", 
          content: "You are a concise coding assistant inside a code editor. Help debug, explain, and suggest code. The editor supports Python 3, Java, C++17, and C." 
        },
        ...filtered
      ],
      max_tokens: 1024,
    });

    res.json({ reply: completion.choices[0].message.content });

  } catch (err) {
    console.error("Groq Error:", err);
    res.status(500).json({ error: "AI request failed", details: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
