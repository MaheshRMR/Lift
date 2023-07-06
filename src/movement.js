import { Button, TextField,Box,Card } from '@mui/material';
import React, { useState } from 'react';
import './movement.css';
import { blue } from '@mui/material/colors';


function Movement () {
  const [trans,setTrans]=useState(140);
  const pos=trans;
  return (
    <div classname="whole" >
    <ul>
    <li>
    <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" sx={{ width :420 ,height:160 }}>floor 4</Card>
        <Card variant="outlined" sx={{ width :420 ,height:160 }}>floor 3</Card>
        <Card variant="outlined" sx={{ width :420 ,height:160 }}>floor 2</Card>
        <Card variant="outlined" sx={{ width :420 ,height:160 }}>floor 1</Card>
        <Card variant="outlined" sx={{ width :420 ,height:160 }}>floor 0</Card>
    </Box>
    </li>
    <li>
    {/* <Box sx={{ minWidth: 275 }}>
        <Button>floor 4</Button>
        <Button>floor 3</Button>
        <Button>floor 2</Button>
        <Button>floor 1</Button>
    </Box> */}
    </li>
    </ul>
    <div  className='lift' style={{bottom:`${pos}px`}}></div>
    </div>
  )
}



export default Movement
