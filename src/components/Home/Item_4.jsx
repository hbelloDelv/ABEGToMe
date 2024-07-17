import React from 'react'
import {Grid, Box, Typography, useMediaQuery} from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { styled, useTheme } from '@mui/material/styles'




const Styledli = styled('li')(({theme})=>({
   fontsize: '3rem',
   listStyle: 'none',
   paddingBottom: theme.spacing(2),
   display: 'flex',
   alignItems: 'center',
   paddingLeft: '8px'
}))

const Item4 = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('md'));

  return (
      <Box sx={{ width: { md: '80%', xs: '100%'}, marginTop: '128px' }}>
        <Grid container >
            <Grid  item xs={12}md={6}>
                <Box alignContent="center" height="100%" sx={{padding:{md: '0px', xs: '16px'}}}>
                    <Typography variant={isXs ? 'h4' : 'h3'} marginBottom="8px">Why choose us</Typography>
                    <ul>
                        <Styledli><TaskAltIcon sx={{paddingRight: '8px', fontSize: '2rem'}}/> Quick response time</Styledli>
                        <Styledli><TaskAltIcon sx={{paddingRight: '8px', fontSize: '2rem'}}/> Seamless experience with our app</Styledli>
                        <Styledli><TaskAltIcon sx={{paddingRight: '8px', fontSize: '2rem'}}/> Exceptional Customer service</Styledli>
                        <Styledli><TaskAltIcon sx={{paddingRight: '8px', fontSize: '2rem'}}/>Comprehensive Services</Styledli>
                    </ul>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box 
                    component="img"
                    src={`${process.env.PUBLIC_URL}/asset/item_4_image.png`}
                    alt="service image"
                    sx={{width:{xs: '100%', md: '80%'}, padding:{md: '0px', xs: '16px'}}}
                >
                </Box>
            </Grid>
        </Grid>
      </Box>
  )
}

export default Item4
