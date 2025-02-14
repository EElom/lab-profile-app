import {  Routes, Route } from 'react-router-dom'
import Header from './app/components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'



function App() {
  return (
    <> 

      <div className="container">
      <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      </div>

    </>
  );
}

export default App;
