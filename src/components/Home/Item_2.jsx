import React from 'react'
import {Grid, Box, Button, Typography } from "@mui/material";
// import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const Item_2 = () => {
  return (
    <Grid container sx={{width:{md: '80%', xs: '100%'}, marginTop: '64px'}} >
    <Grid item xs={12} md={6}>
    <Box sx={{padding:{md: '0px', xs: '16px'}}}>
      <img src={`${process.env.PUBLIC_URL}/asset/item_2_image.png`} alt="brand-logo"  style={{width: "80%", borderRadius: '4px' }} />
      </Box>
    </Grid>

    <Grid item xs={12} md={6} > 
          <Box sx={{padding:{md: '0px', xs: '16px'}}}>
          <Typography variant="h4">
              Who are we?
          </Typography>
          <Typography variant="body1">
            At Abeg, we are dedicated to providing reliable, quick, and effective towing 
            solutions to get you back on the road as soon as possible. Our expert team is 
            available 24/7, ensuring that help is always just a call or a tap away. 
          </Typography>
          <Typography variant="body1">
            With our user-friendly app, you can seamlessly request a tow, 
            track your service in real-time, and access a range of support 
            features, all designed to enhance your experience and minimize stress. 
            Choose Abeg for top-notch, efficient, and dependable towing services.
          </Typography>
          <Box sx={{marginTop: '8px'}}><Button> Learn More</Button></Box>
        </Box>
    </Grid> 
  </Grid>
  )
}

export default Item_2
