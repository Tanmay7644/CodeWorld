// import axios from 'axios';
// import React from 'react'
// import { useEffect,useState } from 'react'
// const AccessLectures = () => {
//   const [lectures,setLectures]=useState([]);
//   useEffect(()=>{
//     axios.get('http://localhost:3000/lectures')
//     .then(res=>setLectures(res.data))
//     .catch(()=>setLectures([]));
//   },[])
//   return (
//     <div className="notes-container">
//       <h1 className='headLine'>Available Lectures</h1>
//       <ul className="notes-list" >
//         {lectures.map(lecture=>(
//           <li key={lecture._id} className="note-card">
//             <strong>Subject:</strong> {lecture.subject} <br />
//             <strong>Topic:</strong> {lecture.topic} <br />
//             <strong>Description:</strong> {lecture.description} <br />
//             <a href={`http://localhost:3000/uploads/${lecture.filename}`} target="_blank" rel="noopener noreferrer">
//               📄 Download/View File
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default AccessLectures


import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="al-play-icon">
    <path d="M8 5v14l11-7z"/>
  </svg>
)

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className="al-dl-icon">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
)

const AccessLectures = () => {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

  // ⚠ Fixed: added [] to prevent infinite re-fetching
  useEffect(() => {
    axios.get('http://localhost:3000/lectures')
      .then(res => setLectures(res.data))
      .catch(() => setLectures([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="al-root">
      {/* Ambient background orbs */}
      <div className="al-orb al-orb--1" />
      <div className="al-orb al-orb--2" />
      <div className="al-noise" />

      {/* Header */}
      <header className="al-header">
        <div className="al-header-left">
          <p className="al-eyebrow">
            <span className="al-eyebrow-dot" />
            Video Library
          </p>
          <h1 className="al-title">Available Lectures</h1>
        </div>
        <div className="al-count-badge">
          {loading ? '—' : lectures.length}
          <span className="al-count-label">lectures</span>
        </div>
      </header>

      {/* Divider */}
      <div className="al-divider">
        <div className="al-divider-line" />
      </div>

      {/* Content */}
      <main className="al-main">
        {loading ? (
          <div className="al-loading">
            <div className="al-spinner" />
            <p>Fetching lectures…</p>
          </div>
        ) : lectures.length === 0 ? (
          <div className="al-empty">
            <span className="al-empty-icon">📭</span>
            <p>No lectures available yet.</p>
          </div>
        ) : (
          <ul className="al-grid">
            {lectures.map((lecture, i) => (
              <li
                key={lecture._id}
                className="al-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Thumbnail area */}
                <div className="al-card-thumb">
                  <div className="al-thumb-bg" />
                  <div className="al-play-btn">
                    <PlayIcon />
                  </div>
                  <span className="al-subject-tag">{lecture.subject}</span>
                </div>

                {/* Card body */}
                <div className="al-card-body">
                  <h2 className="al-card-topic">{lecture.topic}</h2>
                  <p className="al-card-desc">{lecture.description}</p>

                  <a
                    href={`http://localhost:3000/uploads/${lecture.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="al-card-btn"
                  >
                    <DownloadIcon />
                    View / Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default AccessLectures;