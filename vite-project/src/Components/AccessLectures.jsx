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
    <div>
      <h1>Available Lectures</h1>
      <ul>
        {lectures.map(file=>(
          <li key={file}>
            <a href={`http://localhost:3000/uploads/${file}`} target="_blank" rel="noopener noreferrer">
              {file}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AccessLectures
