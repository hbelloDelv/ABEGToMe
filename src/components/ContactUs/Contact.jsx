import React from 'react'
import { DownloadMobileApp } from '../ReusableComponent/DownloadMobileApp'
import {Box, Grid, Typography, IconButton, TextField, useMediaQuery, FormControl, InputLabel, InputBase} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TbBrandTiktok } from "react-icons/tb";


const ContentBox = styled(Box)(({theme})=>({
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '32px 16px',
  color: 'white',
  minHeight: '30vh',
  [theme.breakpoints.down("md")]: {
    minHeight: 'auto',
  },

}))



const Contact = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
    <Box
    sx={{
      minHeight:{xs: '10vh', md: '20vh'} ,
      bgcolor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      borderTopColor: 'white',
      marginTop: '2px'
    }}
    >
      <Typography variant="h4">Contact</Typography>
    </Box>

    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: '64px'
    }}>
      <Box
      sx={{
      width:{xs: '90%', md: '80%'} ,
      // backgroundColor: 'red',
    }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <ContentBox>
                <Typography variant="body1" gutterBottom>Address</Typography>
                <Typography variant="body2">
                NO 10, 35 Road, off 3rd Avenue Gwarinpa 
                Estate, Federal Capital Territory Abuja
                </Typography>
            </ContentBox>
          </Grid>
          <Grid item xs={12} md={3}>
            <ContentBox>
              <Typography variant="body1" gutterBottom>Phone Lines</Typography>
                <Typography variant="body2"  gutterBottom>
                  +2348139667815
                </Typography>
              <Typography variant="body1" gutterBottom>Email address</Typography>
                <Typography variant="body2">
                  info@abegtowme.com
                </Typography>
            </ContentBox>
          </Grid>
          <Grid item xs={12} md={3}>
            <ContentBox>
              <Typography variant="body1" gutterBottom>Business Hours</Typography>
                <Typography variant="body2">
                    24/7 towing
                </Typography>
            </ContentBox>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{
              color: 'white',
              bgcolor: 'black',
              minHeight:{xs: 'none', md: '30vh'} ,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <Typography ml="16px" variant="body1" gutterBottom>Follow us</Typography>                
                  <Grid container ml="16px">
                    <Grid item md={4}>
                        <IconButton>
                          <InstagramIcon sx={{fontSize:{xs: '1rem', md: '1.5rem'}, color: 'white'}}>
                          </InstagramIcon>
                      </IconButton>
                    </Grid>
                    <Grid item md={4}>
                      <IconButton>
                        <XIcon sx={{fontSize:{xs: '1rem', md: '1.5rem'}, color: 'white'}}></XIcon>
                      </IconButton>
                    </Grid>
                    <Grid item md={4}>
                        <IconButton>
                          <YouTubeIcon sx={{fontSize:{xs: '1.5rem', md: '1.5rem'} , color: 'white'}}></YouTubeIcon>
                        </IconButton>
                    </Grid>
                    <Grid item md={4}>
                      <IconButton>
                        <FacebookIcon sx={{fontSize:{xs: '1.5rem', md: '1.5rem'}, color: 'white'}}></FacebookIcon>
                      </IconButton>
                    </Grid>
                    <Grid item md={4}>
                        <IconButton><LinkedInIcon sx={{fontSize:{xs: '1.5rem', md: '1.5rem'}, color: 'white'}}></LinkedInIcon></IconButton>
                    </Grid>
                    <Grid item md={4}>
                    <IconButton><TbBrandTiktok style={{fontSize:{xs: '1.5rem', md: '1.5rem'}, color: 'white'}}></TbBrandTiktok>
                    </IconButton>
                    </Grid>
                  </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>

    {/* contact form */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: '80px'
      }}>
          <Box
          sx={{
          width:{xs: '90%', md: '80%'} ,
          // backgroundColor: 'red',
          border: '1px solid gainsboro',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <Box 
            sx={{
              // width: {md: '100%', xs: '100%'},
              backgroundImage: `url(${process.env.PUBLIC_URL}/asset/contactLocation_image.png)`,
              backgroundSize: 'cover', // Adjust to 'contain' or other value based on your need
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              // height: '100%', // Adjust based on your design needs
              height: { xs: 200, md: '100%' },
            }}
            alt="location"
          >
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box margin="16px">
                <Typography variant={isXs ? 'h5' : 'h4'}>Get a Quote</Typography>
                <Typography variant="body1" gutterBottom>
                  Fill out this form and our team will contact your as soon as possible
                </Typography>
                <form style={{marginTop: '16px'}}>
                  <Box>
                    <label>Full name</label>
                    <TextField id="outlined-basic" size="small" variant="outlined" fullWidth/>
                  </Box>
                  <Box>
                    <label>Phone number</label>
                    <TextField id="outlined-basic" size="small" variant="outlined" fullWidth/>
                  </Box>
                  <Box>
                    <label>Email address</label>
                    <TextField id="outlined-basic" size="small" variant="outlined" fullWidth/>
                  </Box>
                </form>
            </Box>
          </Grid>
        </Grid>
        </Box>
    </Box>
    <DownloadMobileApp />
</>
  )
}

export default Contact
