import React, { useEffect, useState } from 'react'

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function InvoicesList({ data }) {

  const [invoices, setInvoices] = useState([])
  const [packages, setPackages] = useState([])

  useEffect(() => {
    setInvoices(data.customers)
    setPackages(data.packages)
  }, [data])

  
  function PriceSum(id) {
    let count = 0;
    packages.filter((packages) => packages.customerid === id).forEach((value)=>{count += value.price})
    return count
  }

  function WeightSum(id){
    let count = 0;
    packages.filter((packages) => packages.customerid === id).forEach((value)=>{count += parseInt(value.weight.substring(0, value.weight.length -2))})
    return `${count}kg`
  }

  return (
    <div>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Total Weight</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((row) => {
              return (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{PriceSum(row.id)}</TableCell>
                  <TableCell>{WeightSum(row.id)}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>



      {/* move to Header */}
      <Drawer
        anchor={"left"}
        open={false}
        onClose={() => { }}

      >
        <List style={{ width: "300px" }}>
          <ListItem button>
            <ListItemText primary={"Packages"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Customers"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Invoices"} />
          </ListItem>
        </List>
      </Drawer>

    </div>
  )
}

export default InvoicesList