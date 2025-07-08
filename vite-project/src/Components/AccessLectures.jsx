import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react'
const AccessLectures = () => {
  const [lectures,setLectures]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/lectures')
    .then(res=>setLectures(res.data))
    .catch(()=>setLectures([]));
  })
  return (
    <div className="notes-container">
      <h1 className='headLine'>Available Lectures</h1>
      <ul className="notes-list" >
        {lectures.map(lecture=>(
          <li key={lecture._id} className="note-card">
            <strong>Subject:</strong> {lecture.subject} <br />
            <strong>Topic:</strong> {lecture.topic} <br />
            <strong>Description:</strong> {lecture.description} <br />
            <a href={`http://localhost:3000/uploads/${lecture.filename}`} target="_blank" rel="noopener noreferrer">
              📄 Download/View File
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AccessLectures
