
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Box from "./Component/Box/Boxofmain"
import Login from './Component/Login/Login';
import File from './Component/Login/File';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Box />} />
          <Route path="/login" element={<Login />} />
          <Route path="/file" element={<File />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
