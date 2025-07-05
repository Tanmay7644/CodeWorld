import mongoose from "mongoose";

const lectureSchema=new mongoose.Schema({
    filename:String,
    subject:String,
    topic:String,
    description:String,
    uploadedAt: {type:Date, default:Date.now}
});

const Lecture=mongoose.model("Lecture",lectureSchema);
export default Lecture;
