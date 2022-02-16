import React, { useState } from 'react'


import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CustomerList({ data }) {
  const appData = data;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell >id</TableCell>
              <TableCell >Name</TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {appData.customers.map((row) => {

              return (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell >{row.name}</TableCell>
                  <TableCell ><Button variant="contained">Create Invoice</Button></TableCell>
                  <TableCell ><Button variant="contained">Delete</Button></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CustomerList