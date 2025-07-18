import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import Register from './pages/Register'
import Login from './pages/Login'
import Feedback from './pages/Feedback'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route
        path='/feedback'
        element={
        <ProtectedRoute>
          <Feedback/>
        </ProtectedRoute>
        }
        />
      </Routes>
        </BrowserRouter>
    </>
  )
}

export default App