import logo from './logo.svg';
import './App.css';
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Routes,Route,Link, useNavigate } from 'react-router-dom';
import Movement from './movement';
import Sample from './Sample';


function App() {
   
  return (
    <div className="App">

    
      <Routes>
        <Route exact path="/" element={<Sample />} />
        <Route path="/movement" element={<Movement />} />
        {/* <Route path="/config" element={<config />} /> */}

      </Routes>


    </div>
    
  );
}






export default App;
