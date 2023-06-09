import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';

import './Table.css'


function createData(bus_name, seater, passengers, status, from, to, time,) {
  return { bus_name, seater, passengers, status, from, to, time};
}


const rows = [
    createData("Toxic", 40 , 40 , "Empty", "Juja","Ruiru", "8:00am"),
    createData("Batman", 60 , 60 , "Full", "CBD","Thika", "1:00pm"),
    createData("Kingkong", 25 , 23 , "2 seats", "Juja","Ruiru", "8:00am"),
    createData("Mixtape", 25 , 25 , "Empty", "Roysa","CBD", "8:00am"),
    createData("Sugar", 10 , 10 , "Empty", "Juja","TRM", "8:00am"),
];



const makeStyle=(status)=>{
    if(status === 'Full')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Empty')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
 
  return (
      <div className="Table">
          <h3>Recent Buses</h3>
     
    <TableContainer component={Paper}
    style={{
        boxShadow: '0px 13px 20px 0px #80808029',
    }}
    
    
    
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bus</TableCell>
            <TableCell align="left">Seats</TableCell>
            <TableCell align="left">Passengers</TableCell>
            <TableCell align="left">To</TableCell>
            <TableCell align="left">From</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.bus_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.bus_name}
              </TableCell>
              <TableCell align="left">{row.seater}</TableCell>
              <TableCell align="left">{row.passengers}</TableCell>
              <TableCell align="left">{row.from}</TableCell>
              <TableCell align="left">{row.to}</TableCell>
              <TableCell align="left">{row.time}</TableCell>
              
              <TableCell align="left">
              <span className="status" style={makeStyle(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className='Details'>
                
                  <button>Delete</button>
                
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
