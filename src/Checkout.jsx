

import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { remove } from "./store/thaliSlice";
import React, { useState } from "react";


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Checkout = () => {
  const val = useSelector((state)=> state.thalislice.va);
  const dispatch = useDispatch();
  const del = (value)=>{
    dispatch(remove(value.id));
  }


  return (
    <div><br />
        <h2 style={{textAlign:"center"}} > Total Price : Rs.
      {
         val.reduce((acc,curr)=>{
           acc = acc + curr.price;
          return acc;
        },0)
      }
      </h2>

             {
        val.map((value,id)=>{
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
                      <Typography sx={{ cursor: 'pointer',color:"#f44336" }} variant="h6"   onClick={()=> del(value)}>
                        Remove
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
     
    </div>
  )
}

export default Checkout;
