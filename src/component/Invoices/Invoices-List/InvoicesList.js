import React, { useContext } from 'react'
import UserContext from '../../../userContext';
import {PriceSum, WeightSum} from "../utils"

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




function InvoicesList() {
  const {packages, customers } = useContext(UserContext)
  

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
            {customers.map((row) => {
              return (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{PriceSum(row.id, packages)}</TableCell>
                  <TableCell>{WeightSum(row.id, packages)}</TableCell>
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