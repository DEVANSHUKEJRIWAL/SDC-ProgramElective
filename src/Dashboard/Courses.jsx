import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function createData(name, availableSeats) {
  return { name, availableSeats };
}

export default function BasicTable() {
  const [rows, setRows] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);

  useEffect(() => {
    const fetchedRows = [
      createData('Data Mining', 15), 
      createData('Machine Learning', 10), 
     
    ];
    setRows(fetchedRows);
  }, []);

  const handleCheckboxChange = (index) => {
    setSelectedRowIndex(index === selectedRowIndex ? -1 : index); 
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>

            </TableCell>
            <TableCell className="font-bold">Course Name</TableCell>
            <TableCell align="right">Available Seats</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <Checkbox
                  {...label}
                  checked={index === selectedRowIndex}
                  onChange={() => handleCheckboxChange(index)}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.availableSeats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
