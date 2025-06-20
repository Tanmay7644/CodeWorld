import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import CodeEditor from './Components/CodeEditor'
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="code-editor" element={<CodeEditor/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
