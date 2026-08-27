


import React, { useState, useRef, useEffect } from 'react'
import Editor from "@monaco-editor/react"
import axios from 'axios'
import AIAssistant from './AIAssistant'

const CodeEditor = () => {
  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")
  const [language, setLanguage] = useState("python3")
  const [versionIndex, setVersionIndex] = useState("4")
  const [isRunning, setIsRunning] = useState(false)
  const [runTime, setRunTime] = useState(null)
  const outputRef = useRef(null)

  const handleRun = async () => {
    setIsRunning(true)
    setOutput("")
    const start = performance.now()
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/code-editor`, {
        script: code, language, versionIndex
      })
      const elapsed = ((performance.now() - start) / 1000).toFixed(2)
      setRunTime(elapsed)
      setOutput(res.data.output || res.data.error)
    } catch (err) {
      setOutput("⚠ Connection error — is the server running?")
      console.error("Error executing code:", err)
    } finally {
      setIsRunning(false)
    }
  }

  const languages = [
    { name: "Python 3", value: "python3", versionIndex: "4", mono: "PY" },
    { name: "Java",     value: "java",    versionIndex: "4", mono: "JV" },
    { name: "C++ 17",   value: "cpp17",   versionIndex: "0", mono: "C+" },
    { name: "C",        value: "c",       versionIndex: "5", mono: " C" },
  ]

  const currentLang = languages.find(l => l.value === language)

  return (
    <div className="ide-shell">
      {/* Scanline overlay */}
      <div className="scanlines" aria-hidden="true" />

      {/* ── Top bar ────────────────────────────────────── */}
      <header className="ide-topbar">
        <div className="ide-logo">
          <span className="ide-logo-bracket">&lt;</span>
          <span className="ide-logo-name">FORGE</span>
          <span className="ide-logo-bracket">/&gt;</span>
        </div>

        <div className="ide-lang-pills">
          {languages.map(lang => (
            <button
              key={lang.value}
              className={`lang-pill ${language === lang.value ? 'lang-pill--active' : ''}`}
              onClick={() => {
                setLanguage(lang.value)
                setVersionIndex(lang.versionIndex)
              }}
            >
              <span className="lang-pill-mono">{lang.mono}</span>
              <span className="lang-pill-name">{lang.name}</span>
            </button>
          ))}
        </div>

        <button
          className={`run-btn ${isRunning ? 'run-btn--loading' : ''}`}
          onClick={handleRun}
          disabled={isRunning}
        >
          {isRunning ? (
            <>
              <span className="run-spinner" />
              <span>Running</span>
            </>
          ) : (
            <>
              <svg className="run-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3 2l11 6-11 6V2z"/>
              </svg>
              <span>Execute</span>
            </>
          )}
        </button>
      </header>

      {/* ── File tab strip ─────────────────────────────── */}
      <div className="ide-tabs">
        <div className="ide-tab ide-tab--active">
          <span className="tab-dot" />
          main.{language === 'python3' ? 'py' : language === 'java' ? 'java' : language === 'cpp17' ? 'cpp' : 'c'}
        </div>
        <div className="ide-tab-line" />
        <div className="ide-tab-meta">
          <span className="meta-badge">{currentLang?.name}</span>
          {runTime && <span className="meta-time">last run: {runTime}s</span>}
        </div>
      </div>

      {/* ── Editor ─────────────────────────────────────── */}
      <div className="ide-editor-wrap">
        <Editor
          height="100%"
          language={language === 'python3' ? 'python' : language === 'cpp17' ? 'cpp' : language}
          value={code}
          onChange={value => setCode(value || '')}
          theme="vs-dark"
          options={{
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
            fontSize: 14,
            fontLigatures: true,
            lineHeight: 22,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            padding: { top: 16, bottom: 16 },
            renderLineHighlight: 'gutter',
            cursorStyle: 'line',
            cursorWidth: 2,
            smoothScrolling: true,
            contextmenu: false,
          }}
        />
      </div>

      {/* ── Output panel ───────────────────────────────── */}
      <div className="ide-output" ref={outputRef}>
        <div className="output-header">
          <div className="output-title">
            <span className="output-caret">▸</span> STDOUT
          </div>
          {output && (
            <button className="output-clear" onClick={() => { setOutput(''); setRunTime(null) }}>
              clear
            </button>
          )}
        </div>
        <pre className={`output-body ${!output ? 'output-body--empty' : ''}`}>
          {output || 'No output yet — hit Execute to run your code.'}
        </pre>
      </div>

      {/* ── AI Assistant ───────────────────────────────── */}
      <AIAssistant />
    </div>
  )
}

export default CodeEditor