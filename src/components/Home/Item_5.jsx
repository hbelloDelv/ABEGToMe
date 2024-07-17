import React from 'react'
import {Box, Typography, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles';

const Item5 = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box bgcolor="red" width="100%" marginTop='128px'>
      <Box 
            sx={{
              width: { xs: '100%', md: '100%' },
              padding: { md: '0px', xs: '16px' },
              backgroundImage: `url(${process.env.PUBLIC_URL}/asset/item_5_image.png)`,
              backgroundSize: 'cover', // Adjust to 'contain' or other value based on your need
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'rgb(0, 0, 0, 0.5)',
              backgroundBlendMode: 'darken',
              height: {xs: '40vh', md: '70vh'}, // Adjust based on your design needs
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
              
            }}
            alt="service image"
          >
             <Typography variant={isXs ? 'h6' : 'h3'} color="white">
                 Your Trusted Roadside Companion
              </Typography>
          </Box>
    </Box>
  )
}

export default Item5
