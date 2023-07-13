import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';

import Register from './pages/Register';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';
import CodeEditor from './pages/CodeEditor';
import AdminPanel from './adminpages/AdminPanel';

import Quiz from './components/quiz';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/editor" element={<CodeEditor />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/problems" element={<AdminPanel />} />
          <Route path="/adminquiz" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
