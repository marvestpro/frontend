
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import  socketClient from 'socket.io-client';
import { useRef } from 'react';
import Chat from './Chat';

function App() { 
  const endpoint = "http://localhost:4455"
  let token = localStorage.getItem("token")
  const socket = useRef(socketClient(endpoint))
  return (
    <div>
     <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/> 
      <Route path='/chat' element={<Chat socket={socket.current}/>}/> 
     </Routes>
    </div>
  );
}

export default App;
