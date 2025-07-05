import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,role: {type:String,enum :["student","teacher"], required : true}
})

const student=mongoose.model("studentData",UserSchema)
export default student