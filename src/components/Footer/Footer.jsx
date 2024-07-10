import React from 'react'
import { Grid, Box, Typography, IconButton} from "@mui/material";
import './footer.css'
import { styled } from '@mui/material/styles'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import andriodAppStoreLogo from './ios_android_img/andriod_logo.png';
import iosAppStoreLogo from './ios_android_img/ios_logo.png';



const FirstColoumn = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '30%',
    flexDirection: 'column',
  [theme.breakpoints.down("md")]: {
    justifyContent: 'flex-start',
    alignItems: 'none',
    paddingLeft: '0'
  }
}))




const SecondColoumn = styled(Box)(({theme})=>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down("md")]: {
    justifyContent: 'flex-start',
    alignItems: 'none',
  }
}))



const ThirdColoumn = styled(Box)(({theme})=>({
  display: 'flex',
  justifyContent: 'center',
  // alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down("md")]: {
    justifyContent: 'flex-start',
    alignItems: 'none',
  }
}))
  

const Footer = () => {
  return (
    <Grid container spacing={2} sx={{backgroundColor: '#0d1321', color: 'white', padding: '0px 8px', paddingTop: '16px'}}>
        <Grid item xs={12} md={4}>
            <FirstColoumn>
              <ul className="footer-links-first-column">
                  <li>
                     <img src={`${process.env.PUBLIC_URL}/brand-logo.jpg`} alt="brand-logo"  width="10%" style={{cursor: 'pointer', display: 'inline-block'}} />
                  </li>
                  <li style={{marginTop: '24px'}}>Mobile App available on</li>
                  {/*  App stores logo here*/}
              </ul>
            </FirstColoumn >
        </Grid>
        <Grid item xs={12} md={4}>
            <SecondColoumn>
              <ul className="footer-links">
                  <li>Home</li>
                  <li>Services</li>
                  <li>Partnership</li>
                  <li>Blog</li>
                  <li>Gallery</li>
                  <li style={{minWidth: '8vw'}}>About Us</li>
                  <li>Contact </li>
                  <li style={{marginTop: '20px'}}>RC NO. 7301530 </li>
              </ul>
            </SecondColoumn>
        </Grid>
        <Grid item md={4}>
            <ThirdColoumn>
            <Typography>Follow us on Social media</Typography>
            <Grid container>
              <Grid item md={4}>
                <IconButton>
                  <InstagramIcon sx={{fontSize:{xs: '1.5rem', md: '2rem'}, color: 'white'}}>
                    </InstagramIcon>
                  </IconButton>
              </Grid>
              <Grid item md={4}>
                <IconButton>
                  <XIcon sx={{fontSize:{xs: '1.5rem', md: '2rem'}, color: 'white'}}></XIcon>
                </IconButton>
              </Grid>
              <Grid item md={4}>
                <IconButton>
                  <YouTubeIcon sx={{fontSize:{xs: '1.5rem', md: '2rem'} , color: 'white'}}></YouTubeIcon>
                </IconButton>
              </Grid>
              <Grid item md={4}>
                <IconButton>
                  <FacebookIcon sx={{fontSize:{xs: '1.5rem', md: '2rem'}, color: 'white'}}></FacebookIcon>
                </IconButton>
              </Grid>
              <Grid item md={4}>
                <IconButton><LinkedInIcon sx={{fontSize:{xs: '1.5rem', md: '2rem'}, color: 'white'}}></LinkedInIcon></IconButton>
              </Grid>
              <Grid item md={4}><IconButton></IconButton></Grid>
              
              <Grid item xs={12} sx={{marginTop: '24px'}}>
                &copy; 2024 ABEG Tow Me. All Rights Reserved
              </Grid>
            </Grid>
            </ThirdColoumn>
        </Grid>
  </Grid>
    
  )
}

export default Footer
