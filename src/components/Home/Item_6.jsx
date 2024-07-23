import React from 'react'
import {Box, Button, Grid, Typography, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const Item6 = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ width: { md: '80%', xs: '90%'}, marginTop: '128px' }} bgcolor="black" borderRadius="4px">
        <Grid container>
            <Grid item sx={{ order: { xs: 2, md: 1 }, flexGrow: 1 }} md={6} >
                <Box height="100%" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={`${process.env.PUBLIC_URL}/asset/item_6_image.png`} alt="section six"  width="90%"  height="90%" style={{borderRadius: '4px'}}/>
                </Box>
            </Grid>
            <Grid item sx={{ order: { xs: 1, md: 2 }, flexGrow: 1 }} md={6}>
                <Box color="white" padding="16px">
                    <Typography variant={isXs ? 'h6' : 'h4'}>Get your vehicles the</Typography>
                    <Typography variant={isXs ? 'h6' : 'h4'}>proper towing it needs!</Typography>
                    <Typography variant="body1">
                        At Abeg Tow Me, we are dedicated to providing reliable, quick, 
                        and effective towing solutions to get you back on the 
                        road as soon as possible. Our expert team is available 24/7, 
                        ensuring that help is always just a call or a tap away. 
                    </Typography>
                    <Box sx={{marginTop: '16px'}}><Button><HeadsetMicIcon sx={{marginRight: '6px'}}/> Contact us NOW</Button></Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  
  )
}

export default Item6
