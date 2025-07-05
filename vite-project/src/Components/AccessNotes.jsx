import { useEffect,useState } from "react"
import axios from "axios"

const AccessNotes = () => {
  const [notes,setNotes]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/notes')
    .then(res=> setNotes(res.data))
    .catch(err=>setNotes([]));
  },[])
  return (
    <div className="notes-container">
    <h1>Available Notes</h1>
    <ul className="notes-list">
      {notes.map(note => (
        <li key={note._id} className="note-card">
          <strong>Subject:</strong> {note.subject} <br />
          <strong>Topic:</strong> {note.topic} <br />
          <strong>Description:</strong> {note.description} <br />
          <a href={`http://localhost:3000/uploads/${note.filename}`} target="_blank" rel="noopener noreferrer">
            📄 Download/View File
          </a>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default AccessNotes
