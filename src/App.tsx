import React from 'react';
import Button from '@mui/material/Button';
import { Routes, Route, Link } from "react-router-dom";
import './styles/app.scss';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Button variant="contained" className="button">Hello World in main route</Button>} />
        <Route path="home" element={<Button variant="contained" className="button">Hello World in home route</Button>} />
      </Routes>
    </div>
  );
}

export default App;
