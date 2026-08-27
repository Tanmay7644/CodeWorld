



import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadNotes = () => {
    const [subject, setSubject] = useState("");
    const [topic, setTopic] = useState("");
    const [desc, setDesc] = useState("");
    const [fileName, setFileName] = useState("");
    const [dragging, setDragging] = useState(false);
    const fileRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const file = fileRef.current.files[0];

      // Manual check instead of 'required' on hidden input
      if (!file) {
          alert("Please select a file to upload.");
          return;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('subject', subject);
      formData.append('topic', topic);
      formData.append('description', desc);

      await axios.post(`${import.meta.env.VITE_API_URL}/upload/notes`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

      alert("Notes Uploaded");
      navigate('/TeacherHome');
  };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            fileRef.current.files = e.dataTransfer.files;
            setFileName(file.name);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) setFileName(e.target.files[0].name);
    };

    return (
        <div className='upload'>
            <form onSubmit={handleSubmit} className='upload-form'>

                {/* Header */}
                <div className='upload-form__header'>
                    <div className='upload-form__icon'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="12" y1="18" x2="12" y2="12"/>
                            <line x1="9" y1="15" x2="15" y2="15"/>
                        </svg>
                    </div>
                    <div>
                        <p className='upload-form__title'>Upload Notes</p>
                        <p className='upload-form__subtitle'>Share resources with your students</p>
                    </div>
                </div>

                {/* Subject + Topic row */}
                <div className='upload-form__row'>
                    <div className='upload-form__field'>
                        <label>SUBJECT</label>
                        <input type="text" placeholder="e.g. Physics" onChange={(e) => setSubject(e.target.value)} required />
                    </div>
                    <div className='upload-form__field'>
                        <label>TOPIC</label>
                        <input type="text" placeholder="e.g. Optics" onChange={(e) => setTopic(e.target.value)} required />
                    </div>
                </div>

                {/* Description */}
                <div className='upload-form__field'>
                    <label>DESCRIPTION</label>
                    <textarea placeholder="Add a brief description for students..." onChange={(e) => setDesc(e.target.value)} required />
                </div>

                {/* Drop Zone */}
                <div
                    className={`upload-form__dropzone ${dragging ? 'upload-form__dropzone--active' : ''}`}
                    onClick={() => fileRef.current.click()}
                    onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 16 12 12 8 16"/>
                        <line x1="12" y1="12" x2="12" y2="21"/>
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
                    </svg>
                    {fileName
                        ? <p className='upload-form__filename'>{fileName}</p>
                        : <>
                            <p className='upload-form__drop-title'>Drag & drop your file here</p>
                            <p className='upload-form__drop-sub'>or <span>browse files</span> · PDF, DOCX, PPT up to 50 MB</p>
                          </>
                    }
                    <input type="file" ref={fileRef} onChange={handleFileChange} style={{ display: 'none' }} />
                </div>

                {/* Footer */}
                <div className='upload-form__footer'>
                    <button type="button" className='upload-form__cancel' onClick={() => navigate('/TeacherHome')}>Cancel</button>
                    <button type="submit" className='upload-form__submit'>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 16 12 12 8 16"/>
                            <line x1="12" y1="12" x2="12" y2="21"/>
                            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
                        </svg>
                        Upload Notes
                    </button>
                </div>

            </form>
        </div>
    );
};

export default UploadNotes;