// import StudentNavbar from './StudentNavbar'
// import Footer from './Footer'
// import Line from "../assets/line-seperator.png"
// import { useNavigate } from 'react-router-dom'

// import codeEditor from '../assets/codeEditor.jpg'
// import uploadNote from '../assets/uploadNotes.jpg'
// import uploadLecture from '../assets/uploadLectures.jpg'
// const TeacherHome = () => {
//   const navigate=useNavigate();
//   const uploadNotes=()=>{
//     navigate('/uploadNotes');
//   }
//   const uploadLectures=()=>{
//     navigate('/uploadLectures');
//   }
//   const handleCode=()=>{
//     navigate('/code-editor')
//   }
//   return (
//     <div className='student-home'>
//       <div className='student-home-background'></div>
//       <StudentNavbar/>
//       {/* <hr className='student-line'/> */}
//       <div className='student-hero'>
//         <h1>Build  Learn  Code  Repeat</h1>
//         <h3>Code World empowers students and educators to learn, collaborate, and build in real-time. From notes and lectures to writing and testing code—everything you need in one platform.</h3>
//       </div>
//       <div className='line-seperator'>
//           <img src={Line} alt="" />
//       </div>
//       <div className='student-container'>
//         <div className='container-1'>
//             <h1>Upload Notes</h1>
//             <img src={uploadNote} alt="" />
//             <button onClick={uploadNotes}>Upload Notes</button>
//         </div>
//         <div className='container-2' >
//             <h1>Code Editor</h1>
//             <img src={codeEditor} alt="" />
//             <button onClick={handleCode}>Code</button>
//         </div>
//         <div className='container-3'>
//             <h1>Upload Lectures</h1>
//             <img src={uploadLecture} alt="" />
//             <button onClick={uploadLectures}>Upload Lectures</button>
//         </div>
//       </div>

//       <Footer/>
//     </div>
//   )
// }

// export default TeacherHome


import StudentNavbar from './StudentNavbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { NotesIllustration, CodeIllustration, LectureIllustration } from './CardIllustrations'

const features = [
  {
    id: 1,
    title: 'Upload Notes',
    subtitle: 'Share knowledge instantly',
    illustration: <NotesIllustration />,
    action: '/uploadNotes',
    tag: 'DOCS',
    accent: '#6366f1',
    accentDim: 'rgba(99,102,241,0.12)',
  },
  {
    id: 2,
    title: 'Code Editor',
    subtitle: 'Write & run live code',
    illustration: <CodeIllustration />,
    action: '/code-editor',
    tag: 'IDE',
    accent: '#22d3ee',
    accentDim: 'rgba(34,211,238,0.12)',
    featured: true,
  },
  {
    id: 3,
    title: 'Upload Lectures',
    subtitle: 'Publish video content',
    illustration: <LectureIllustration />,
    action: '/uploadLectures',
    tag: 'VIDEO',
    accent: '#a78bfa',
    accentDim: 'rgba(167,139,250,0.12)',
  },
]

const TeacherHome = () => {
  const navigate = useNavigate()

  return (
    <div className="th-root">
      {/* Ambient orbs */}
      <div className="th-orb th-orb--1" aria-hidden="true" />
      <div className="th-orb th-orb--2" aria-hidden="true" />
      <div className="th-orb th-orb--3" aria-hidden="true" />
      <div className="th-noise" aria-hidden="true" />

      <StudentNavbar />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="th-hero">
        <p className="th-eyebrow">Code World Platform</p>
        <h1 className="th-headline">
          <span className="th-headline-line">Build. Learn.</span>
          <span className="th-headline-line th-headline-line--accent">Code. Repeat.</span>
        </h1>
        <p className="th-subline">
          Empower students and educators to learn, collaborate, and build in real-time —
          from notes and lectures to writing and testing code.
        </p>
        <div className="th-hero-badges">
          <span className="th-badge">Real-time collaboration</span>
          <span className="th-badge">Multi-language IDE</span>
          <span className="th-badge">Lecture streaming</span>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────── */}
      <div className="th-divider">
        <div className="th-divider-line" />
        <span className="th-divider-label">Everything in one place</span>
        <div className="th-divider-line" />
      </div>

      {/* ── Feature cards ────────────────────────────── */}
      <section className="th-cards">
        {features.map((f, i) => (
          <article
            key={f.id}
            className={`th-card ${f.featured ? 'th-card--featured' : ''}`}
            style={{ '--accent': f.accent, '--accent-dim': f.accentDim, animationDelay: `${i * 0.12}s` }}
          >
            <div className="th-card-tag">{f.tag}</div>

            <div className="th-card-img-wrap">
              {f.illustration}
              <div className="th-card-img-overlay" />
            </div>

            <div className="th-card-body">
              <h2 className="th-card-title">{f.title}</h2>
              <p className="th-card-sub">{f.subtitle}</p>
              <button
                className="th-card-btn"
                onClick={() => navigate(f.action)}
              >
                <span>Open</span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className="th-card-arrow">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {f.featured && <div className="th-card-featured-ring" />}
          </article>
        ))}
      </section>

      <Footer />
    </div>
  )
}

export default TeacherHome