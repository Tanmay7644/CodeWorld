import React, { use, useState } from 'react'
import Editor from "@monaco-editor/react"
import axios from 'axios'
const CodeEditor = () => {
    const [code,setCode]=useState("");
    const [output,setOutput]=useState("");
    const [language,setLanguage]=useState("python3");
    const [versionIndex,setVersionIndex]=useState("4");
    const handleRun=async (e)=>{
        e.preventDefault();
        try{
            const res= await axios.post('http://localhost:3000/code-editor',{script:code,language,versionIndex});
            setOutput(res.data.output || res.data.error);
        }
        catch(err){
            setOutput("Error Executing Code!");
        } 
    }
  return (
    <div >
      <Editor
        height="100vh"
        defaultLanguage='cpp'
        defaultValue=''
        theme='vs-dark'
        value={code}
        onChange={value=>setCode(value)}
      />
        <button className='code-button' style={{marginTop: '10px'}} onClick={handleRun}>Run</button>
        <strong>Output:</strong>
        <pre>{output}</pre>
    </div>
  )
}

export default CodeEditor
