import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import './App.css';
import Events from './components/Events';
import Login from './components/Login';
import Students from './components/Students';
import Upcomingevents from './components/Upcomingevents';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';


function App() {
  const [login, setlogin] = useState([])
  const [student, setstudent] = useState([])
  const [liveevent, setliveevent] = useState([])
  const [upcomingevent, setupcomingevent] = useState([])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home login={login} student={student} liveevent={liveevent} upcomingevent={upcomingevent} />} />
        <Route path='/login' element={<Login setlogin={setlogin} setstudent={setstudent} setliveevent={setliveevent} setupcomingevent={setupcomingevent} />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/student' element={<Students />} />
        <Route path='/event' element={<Events />} />
        <Route path='/upcomingevent' element={<Upcomingevents />} />
      </Routes>
    </>
  );
}

export default App;
