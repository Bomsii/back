import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import Loginup from './pages/Login';
import SignUp from './pages/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Loginup />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
