import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <div className="login-button">
        <button onClick={() => window.location.href = '/login'}>Login</button>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<TodoWrapper />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
      <footer>Made By Shahmir</footer> 
    </div>
  );
}

export default App;
