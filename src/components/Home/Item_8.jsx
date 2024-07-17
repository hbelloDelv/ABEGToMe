import React from 'react'
import {Grid, Box, Button, Typography } from "@mui/material";

const Item8 = () => {
  return (
    <Box 
            sx={{
              width: { xs: '100%', md: '100%' },
              padding: { md: '0px', xs: '16px' },
              backgroundImage: `url(${process.env.PUBLIC_URL}/asset/item_8_image.png)`,
              backgroundSize: 'cover', // Adjust to 'contain' or other value based on your need
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'rgb(0, 0, 0, 0.2)',
              backgroundBlendMode: 'darken',
              height: {xs: '40vh', md: '70vh'}, // Adjust based on your design needs
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '128px'
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
                          <Box><Button>Learn more</Button></Box>
                      </Box>
                  </Grid>
              </Grid>
          </Box>
  )
}

export default Item8
