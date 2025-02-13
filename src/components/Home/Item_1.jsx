import React from 'react'
import {Grid, Box, Button, Typography, Stack } from "@mui/material";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { useNavigate } from 'react-router-dom';


const Item1 = () => {
  const navigate = useNavigate()

  return (
    <Grid container sx={{width:{md: '80%', xs: '100%'}, marginTop:{xs: '16px', md: '64px'}}}>
      <Grid item xs={12} md={6}>
            <Box sx={{padding:{ xs: '16px'}}}>
            <Typography variant="h4">
                Where ever you go,
            </Typography>
            <Typography variant="h4">
                we've got your back.
            </Typography>
            <Typography variant="body1">
                Welcome to <strong>Abeg Tow Me</strong>, your go-to car towing service for reliable, quick, 
                and effective roadside assistance. Our mobile app is designed 
                to provide you with peace of mind on the road, ensuring that help is 
                just a tap away whenever you need it.
            </Typography>
            <Box sx={{marginBottom: '8px', marginTop: '16px'}}>
                <Stack direction="row" marginTop='16px'>
                            <a href="https://play.google.com/store/apps/details?id=com.abegtowme.rider">
                            <Box 
                                component="img"
                                src={`${process.env.PUBLIC_URL}/asset/playStore_image.png`}
                                alt="play store"
                                marginRight="16px"
                                sx={{cursor: "pointer"}}
                                >
                            </Box>
                            </a>
                            <a href="https://apps.apple.com/us/app/abeg-tow-me/id6461414835">
                            <Box 
                                component="img"
                                src={`${process.env.PUBLIC_URL}/asset/appStore_image.png`}
                                alt="app store"
                                sx={{cursor: "pointer"}}
                            >
                            </Box>
                            </a>
                    </Stack>
            </Box>
            <Box><Button onClick={()=>navigate('/contact')}><HeadsetMicIcon sx={{marginRight: '6px'}}/> Contact us NOW</Button></Box> 
        
          </Box>
      </Grid> 


      <Grid item xs={12} md={6}>
        <a href="https://play.google.com/store/apps/details?id=com.abegtowme.driver">
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <img src={`${process.env.PUBLIC_URL}/asset/ABEGMobil_image.png`} alt="mobile app"  width="100%"  />
        </Box>
        </a>
      </Grid>

    </Grid>

  )
}

export default Item1
