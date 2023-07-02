import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';

import './App.css';

import Register from './pages/Register';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';
import CodeEditor from './pages/CodeEditor';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/editor" element={<CodeEditor />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
