import React from 'react'
import {Grid, Box, Button, Typography, useMediaQuery } from "@mui/material";
import {useTheme} from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const DesktopLayout = () => {
  const navigate = useNavigate()
  return (
    <Box 
            sx={{
              width: {md: '100%' },
              padding: { md: '0px', xs: '16px' },
              backgroundImage: `url(${process.env.PUBLIC_URL}/asset/item_8_image.jpg)`,
              backgroundSize: 'cover', // Adjust to 'contain' or other value based on your need
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'rgb(0, 0, 0, 0.3)',
              backgroundBlendMode: 'darken',
              height: {xs: '40vh', md: '100vh'}, // Adjust based on your design needs
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}
            alt="abeg driver"
          >
              <Grid container>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6}>
                      <Box color="white">
                          <Typography variant="h3">Earn more,</Typography>
                          <Typography variant="h3">Become an Abeg</Typography>
                          <Typography variant="h3">Driver</Typography>
                          <Box><Button variant="contained" onClick={()=>navigate('/about')}>Learn more</Button></Box>
                      </Box>
                  </Grid>
              </Grid>
          </Box>
  )
}


const MobileLayout = () =>{
  const navigate = useNavigate()
    return(
        <Box margin='72px 0px' padding="0px 8px">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <Box 
                    component="img"
                    src={`${process.env.PUBLIC_URL}/asset/item_8_image.jpg`}
                    alt="app store"
                    width='100%'
                 >
                </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                          <Typography variant="h5">Earn more,</Typography>
                          <Typography variant="h5">Become an Abeg Tow Me</Typography>
                          <Typography variant="h5">Driver</Typography>
                          <Box><Button variant="contained" onClick={()=>navigate('/contact')}>Learn more</Button></Box>
                      </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

const Item8 = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
      
  <>
  {!matches && <DesktopLayout />}
  
  {matches && <MobileLayout /> }
  </>
    )
  }

export default Item8
