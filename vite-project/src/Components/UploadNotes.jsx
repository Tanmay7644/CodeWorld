import axios from 'axios';
import React, { useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom';
const UploadNotes = () => {
    const [subject,setSubject]=useState("");
    const [topic,setTopic]=useState("");
    const [desc,setDesc]=useState("");

    const fileRef=useRef();
    const navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const file=fileRef.current.files[0];

        const formData=new FormData();

        formData.append('file',file);
        formData.append('subject',subject);
        formData.append('topic',topic);
        formData.append('description',desc);

        await axios.post("http://localhost:3000/upload/notes",formData,{
            headers:{ 'Content-Type': 'multipart/form-data' }
        });

        alert("Notes Uploaded");
        navigate('/TeacherHome');
    }
  return (
    <div className='upload'>
      <form onSubmit={handleSubmit} className='upload-form'>
        <h1>Upload Notes</h1>
        <h2>Subject</h2>
        <input type="text" placeholder='Subject' onChange={(e)=>{setSubject(e.target.value)}}  required/>
        <h2>Topic</h2>
        <input type="text" placeholder='Topic' onChange={(e)=>{setTopic(e.target.value)}}  required/>
        <h2>Description</h2>
        <textarea name="" id=""  placeholder='Description' onChange={(e)=>(setDesc(e.target.value))} required></textarea>
        <input type="file" ref={fileRef} required/>
        <button>Upload</button>
      </form>
    </div>
  )
}

export default UploadNotes
