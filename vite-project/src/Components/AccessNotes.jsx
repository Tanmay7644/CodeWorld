

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"
    strokeLinecap="round" strokeLinejoin="round" className="al-play-icon">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="8" y1="13" x2="16" y2="13"/>
    <line x1="8" y1="17" x2="13" y2="17"/>
  </svg>
)

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className="al-dl-icon">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
)

const AccessNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/notes`)
      .then(res => setNotes(res.data))
      .catch(() => setNotes([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="al-root">
      <div className="al-orb al-orb--1" />
      <div className="al-orb al-orb--2" />
      <div className="al-noise" />

      <header className="al-header">
        <div className="al-header-left">
          <p className="al-eyebrow">
            <span className="al-eyebrow-dot" />
            Notes Library
          </p>
          <h1 className="al-title">Available Notes</h1>
        </div>
        <div className="al-count-badge">
          {loading ? '—' : notes.length}
          <span className="al-count-label">notes</span>
        </div>
      </header>

      <div className="al-divider">
        <div className="al-divider-line" />
      </div>

      <main className="al-main">
        {loading ? (
          <div className="al-loading">
            <div className="al-spinner" />
            <p>Fetching notes…</p>
          </div>
        ) : notes.length === 0 ? (
          <div className="al-empty">
            <span className="al-empty-icon">📭</span>
            <p>No notes available yet.</p>
          </div>
        ) : (
          <ul className="al-grid">
            {notes.map((note, i) => (
              <li
                key={note._id}
                className="al-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="al-card-thumb">
                  <div className="al-thumb-bg" />
                  <div className="al-play-btn">
                    <DocIcon />
                  </div>
                  <span className="al-subject-tag">{note.subject}</span>
                </div>

                <div className="al-card-body">
                  <h2 className="al-card-topic">{note.topic}</h2>
                  <p className="al-card-desc">{note.description}</p>
                  <a
                    // href={`${import.meta.env.VITE_API_URL}/uploads/${note.filename}`}
                    href={note.filename}
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

export default AccessNotes;