import React from 'react'
import {Grid, Box, Button, Typography } from "@mui/material";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';


const Item_1 = () => {
  return (
    <Grid container sx={{width:{md: '80%', xs: '100%'}}}>
      <Grid item xs={12} md={6}>
            <Box sx={{padding:{md: '72px', xs: '16px' } }}>
            <Typography variant="h4">
                Where ever you go,
            </Typography>
            <Typography variant="h4">
                we've got your back.
            </Typography>
            <Typography variant="body1">
                Welcome to Abeg, your go-to car towing service for reliable, quick, 
                and effective roadside assistance. Our mobile app is designed 
                to provide you with peace of mind on the road, ensuring that help is 
                just a tap away whenever you need it.
            </Typography>
            <Box sx={{marginBottom: '8px', marginTop: '16px'}}>
                <Button size="large"sx={{marginRight: '8px'}}>iOS</Button>
                <Button size="large">andriod</Button>
            </Box>
            <Box><Button><HeadsetMicIcon sx={{marginRight: '6px'}}/> Contact us NOW</Button></Box>
          </Box>
      </Grid> 


      <Grid item xs={12} md={6}>
      <Box sx={{padding:{md: '0px', xs: '0px'}}}>
        <img src={`${process.env.PUBLIC_URL}/asset/ABEGMobil_image.png`} alt="brand-logo"  width="100%"  />
        </Box>
      </Grid>

    </Grid>

  )
}

export default Item_1