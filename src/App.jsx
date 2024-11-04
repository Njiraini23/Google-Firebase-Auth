import {Routes, Route} from 'react-router-dom';
import './App.css'
import Register from './pages/register';
import Login from './pages/login';
import Profile from './pages/profile';

import AuthPage from './pages/private-route';

function App() {
  
  return (
    <div>
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={
        <AuthPage>
          <Profile/>
        </AuthPage>
      } 
      />
    </Routes>
    </div>
  )
}

export default App
