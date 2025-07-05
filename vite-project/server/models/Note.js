import mongoose from "mongoose";

const noteSchema=new mongoose.Schema({
    filename:String,
    subject:String,
    topic:String,
    description:String,
    uploadedAt: {type:Date, default:Date.now}
});

const Note=mongoose.model("Note",noteSchema);
export default Note;
