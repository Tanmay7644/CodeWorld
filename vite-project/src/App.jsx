import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import CodeEditor from './Components/CodeEditor'
import StudentHome from './Components/StudentHome'
import TeacherHome from './Components/TeacherHome'
import ProtectedRoute from './Components/ProtectedRoute'
import Profile from './Components/Profile'
import UploadLectures from './Components/UploadLectures'
import UploadNotes from './Components/UploadNotes'
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="code-editor" element={<CodeEditor/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/StudentHome' element={
          <ProtectedRoute allowedRoles={["student"]}> 
          <StudentHome/>
        </ProtectedRoute>
        }/>

        <Route path='/TeacherHome' element={
          <ProtectedRoute allowedRoles={["teacher"]}> 
          <TeacherHome/>
        </ProtectedRoute>
        }></Route>

        <Route path='/profile' element={
            <ProtectedRoute allowedRoles={["student", "teacher"]}>
              <Profile/>
            </ProtectedRoute>
          }/>
        

        <Route path='/uploadNotes' element={
          <ProtectedRoute allowedRoles={["teacher"]}> 
          <UploadNotes/>
        </ProtectedRoute>
        }/>

        <Route path='/uploadLectures' element={
          <ProtectedRoute allowedRoles={["teacher"]}> 
          <UploadLectures/>
        </ProtectedRoute>
        }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
