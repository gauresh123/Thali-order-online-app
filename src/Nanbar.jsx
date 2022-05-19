import React from 'react'
import {AppBar,Button,Toolbar,Typography} from "@mui/material";
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';


const Nanbar = () => {
  return (
    <>
    <Box sx={{flexGrow:1}}>
  <AppBar position="fixed" sx={{background:"#ba000d"}}>
<Toolbar>
<Typography variant="h4"  component="div" sx={{flexGrow:1,fontStyle:"italic"}}>
  Thali
</Typography>
<Button component={NavLink} to="/" sx={{color:"white",textTransform:"none",fontWeight:"bold"}} variant="h5">Home</Button>
<Button component={NavLink} to="/check" sx={{color:"white",textTransform:"none",fontWeight:"bold"}} variant="h5">Checkout</Button>
</Toolbar>
</AppBar>
</Box>
<br /><br />
</>
  )
}


export default Nanbar;

