import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Preview from './routes/Preview'
import Login from './routes/Authentication/Login'
import Signup from './routes/Authentication/Signup'
import User from './routes/User'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user" element={<User />} />
    </Routes>
  )
}

export default App
