import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem, ListItemText, SwipeableDrawer } from '@mui/material';
import { Link } from 'react-router-dom';



function Header() {

  const [state, setState] = useState(false)

  const toggleDrawer = (open) => () => setState(open)

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Customers', 'Packeges', 'Invoice',].map((text, index) => (
          <Link key={text+index} style={{ textDecoration: "none", color: 'inherit' }} to={`${text !== "Customers" ? `/${text}` : "/"}`}>
            <ListItem button key={text}>
              <ListItemText align="left">{text}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
  //   <Drawer
  //   anchor={"left"}
  //   open={false}
  //   onClose={() => { }}

  // >
  //   <List style={{ width: "300px" }}>
  //     <ListItem button>
  //       <ListItemText primary={"Packages"} />
  //     </ListItem>
  //     <ListItem button>
  //       <ListItemText primary={"Customers"} />
  //     </ListItem>
  //     <ListItem button>
  //       <ListItemText primary={"Invoices"} />
  //     </ListItem>
  //   </List>
  // </Drawer>
    
    <div>
      <>
        <SwipeableDrawer
          open={state}
          onClose={toggleDrawer(false)}
        >
          {list("left")}
        </SwipeableDrawer>
      </>


      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mail Delivery Service
            </Typography>

          </Toolbar>
        </AppBar>
      </Box>

    </div>
  )
}

export default Header