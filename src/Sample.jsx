import React from 'react'
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import'./sample.css'
import Movement from './movement';
import {trans}
const Sample = () => {

  const [Dval,setDval]=useState(0)
  const [Cval,setCval]=useState(0)
  const [count, setCount] = useState(0)
  const navigate= useNavigate();



    
  
  return (
    <div className='movement'>
      <div><Movement/></div>
      
      <div className='button-group'>
      <button 
        
        onClick={()=>{
        
        setCval(Dval)
        setDval(4);
        
    }}>4</button>
    

    
    
    <button 
    
    onClick={()=>{
        setCval(Dval)
        setDval(3);
        
    }}>3</button>

    <button 
    
    onClick={()=>{
        setCval(Dval)
        setDval(2);
        
    }}>2</button>

    <button 
    
    onClick={()=>{
      setCval(Dval)
      setDval(1);
      
    }}>1</button>
    
    <button 
    
    onClick={()=>{
      setCval(Dval)
      setDval(0);
      
    }}>0</button>
    </div>
   
    
    
    </div>
  )
}

export default Sample