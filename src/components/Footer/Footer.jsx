import React from 'react'
import { Grid, Box, Stack, Typography, IconButton} from "@mui/material";
import {Link } from "react-router-dom";
import './footer.css'
import { styled } from '@mui/material/styles'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { PiTiktokLogoThin } from "react-icons/pi";
// import { AiFillTikTok } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";



const FirstColoumn = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '30%',
    flexDirection: 'column',
  [theme.breakpoints.down("md")]: {
    justifyContent: 'flex-start',
    alignItems: 'none',
    paddingLeft: '8px'
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
    <Grid container spacing={2} sx={{backgroundColor: '#0d1321', color: 'white',  paddingTop: '16px', }}>
        <Grid item xs={12} md={4}>
            <FirstColoumn>
              <ul className="footer-links-first-column">
                  <li>
                     <img src={`${process.env.PUBLIC_URL}/brand-logo.jpg`} alt="brand-logo"  width="15%" style={{cursor: 'pointer'}} />
                  </li>
                  <li style={{marginTop: '24px'}}>Mobile App available on</li>
                  <li>
                      <Box>
                        <Stack direction="row" marginTop='16px' >
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
                  </li>
              </ul>
            </FirstColoumn >
        </Grid>
        <Grid item xs={12} md={4}>
            <SecondColoumn>
              <ul className="footer-links">
                  <li><Link to="/" className="nav-item">Home</Link></li>
                  <li><Link to="/services" className="nav-item">Services</Link></li>
                  <li><Link to="/partnership" className="nav-item">Partnership</Link></li>
                  <li><Link to="/blog" className="nav-item">Blog</Link></li>
                  <li><Link to="/gallary" className="nav-item">Gallery</Link></li>
                  <li><Link to="/about" className="nav-item">About Us</Link></li>
                  <li><Link to="/contact" className="nav-item">Contact</Link></li>
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
              <Grid item md={4}><IconButton><TbBrandTiktok sx={{fontSize:{xs: '1.5rem', md: '2rem'}, color: 'white'}}></TbBrandTiktok></IconButton></Grid>
              
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
