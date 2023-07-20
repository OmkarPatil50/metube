import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Topbar from './Components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
