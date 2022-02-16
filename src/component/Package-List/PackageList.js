import React, { useState, useEffect } from 'react'

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ButtonBase, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

function PackageList({ data }) {
  const [appData, setAppData] = useState([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setAppData(data.packages.sort((a, b) => a.shippingOrder - b.shippingOrder))
  }, [data])

  function DeleteHendler(Id) {
    setAppData(appData.filter((row) => row.id !== Id))
  }

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }


  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Price</TableCell>

              <TableCell>
                <IconButton onClick={handleClickOpen}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <AddIcon />
                </IconButton>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Add Package</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Please add all the needed information for the deivery
                    </DialogContentText>

                    <FormControl sx={{ minWidth: 120 }}
                      required={true}
                      margin="normal"
                      fullWidth
                      variant="standard"
                    >
                      <InputLabel id="demo-simple-select-standard-label">Customer Name</InputLabel>
                      <Select
                        value={name}
                        onChange={handleChange}
                        label="Customer Name"
                      >
                        <MenuItem value="">
                          <em>select</em>
                        </MenuItem>
                        <MenuItem value={"Dave"}>Dave</MenuItem>
                        <MenuItem value={"Sarah"}>Sarah</MenuItem>
                        <MenuItem value={"Otis"}>Otis</MenuItem>
                        <MenuItem value={"Marry"}>Marry</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      margin="dense"
                      label="weight (as kg)"
                      type="number"
                      fullWidth
                      variant="standard"
                      required={true}
                    />
                    <TextField
                      margin="dense"
                      label="price"
                      type="number"
                      fullWidth
                      variant="standard"
                      required={true}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={handleClose}>Save</Button>
                  </DialogActions>
                </Dialog>

              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>

            {appData.map((row) => {
              return (
                <TableRow key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell >{data.customers.find((id) => id.id === row.customerid).name}</TableCell>
                  <TableCell >{row.weight}</TableCell>

                  <TableCell >{row.price}</TableCell>
                  <TableCell ><Button onClick={() => DeleteHendler(row.id)} variant="contained">Delete</Button><i>Up down buttons should go here</i></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default PackageList