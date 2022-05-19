import { Alert, AlertTitle, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './store/thaliSlice';
import { useNavigate } from 'react-router-dom';
import React, {  useState } from 'react';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
function Home() {
     const thali = useSelector((state)=> state.thalislice.items)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[flag,setflag]=useState(false);
  
  
  const check = (value)=>{
     dispatch(add(value));
     setflag(true);
     setTimeout(()=>{
       setflag(false);
     },1000)
     
  }
  

  const go = ()=>{
    navigate("/check")
  }

  return (
    <div><br />
      {
        flag?<Alert variant="filled"  severity="success" sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 700,
          flexGrow: 1,
        }}>
        <AlertTitle>Success</AlertTitle>
        Item Added Successfully — <strong>check it out!</strong>
      </Alert>:null
      }
      <br />
   { thali.map((value)=>{
     return (<Box sx={{flexGrow: 1}}>
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 700,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={value.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
               {value.itmnm}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {value.discrip1}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {value.hotelnm}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer',color:"#e91e63" }} variant="h6" onClick={()=>{
                 check(value);
              }}>
                Checkout
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="div">
               Rs.{value.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper><br />
    
             </Box>);
             })
}
<Grid container sx={{justifyContent:"center",background:"#e91e63"}}>
<Button variant="h1" sx={{color:"white",fontWeight:"bold",textTransform:"none",textDecoration:"underline"}} onClick={go} position="fixed">Go to Checkout Page...</Button>
</Grid><br />


    </div>
  )
}

export default Home;

