import React, { useState } from 'react'
import Editor from "@monaco-editor/react"
import axios from 'axios'
const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("python3");
  const [versionIndex, setVersionIndex] = useState("4");
  const handleRun = async (e) => {
    // e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/code-editor', { script: code, language, versionIndex });
      setOutput(res.data.output || res.data.error);
    }
    catch (err) {
      setOutput("Error Executing Code!");
      console.error("Error executing code:", err);
    }
  }

  const languages = [
    {
      name: "Python 3",
      value: "python3",
      versionIndex: "4"
    },
    {
      name: "Java",
      value: "java",
      versionIndex: "4"
    },
    {
      name: "C++ 17",
      value: "cpp17",
      versionIndex: "0"
    },
    {
      name: "C",
      value: "c",
      versionIndex: "5"
    }
  ]
  return (
    <div className='editor'>
      <div className='code-editor-nav'>
        <h1>Code Editor</h1>
        <button className='code-button' onClick={handleRun}>Run</button>
        <select value={language}
          onChange={(e) => {
            const selected = languages.find((lang) => lang.value === e.target.value);
            setLanguage(selected.value);
            setVersionIndex(selected.versionIndex);
          }}>
          {languages.map(lang => (
            <option key={lang.value} value={lang.value}>{lang.name}</option>
          ))}</select>
      </div>
      <div className='editor-container'>
        <Editor
          height="100vh"
          defaultLanguage='cpp'
          defaultValue=''
          theme='vs-dark'
          value={code}
          onChange={value => setCode(value)}
        />
      </div>
      <div className='output'>
        <strong>Output:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  )
}

export default CodeEditor
