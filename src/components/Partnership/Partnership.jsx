import React from 'react'
import { 
  Grid, 
  Box, 
  Stack, 
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from '@mui/material/styles'

// Frequent ask Question component
import FnQ from './FnQ';
import WhyDrive from './WhyDrive';
import { whyDriveData } from './WhyDriveData'; 



const DesktopSectionFour = styled(Box)(({theme})=>({
  width: '80%',
  // backgroundColor: 'red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]: {
    display: 'flex',
  },
  [theme.breakpoints.down("md")]: {
    display: 'none'
  },
}))


const MobileSectionFour = styled(Box)(({theme})=>({
  width: '90%',
  display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  backgroundColor: 'blue',
  [theme.breakpoints.up("md")]: {
    display: 'none'
  },
}))



const Partnership = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
    <Box 
    sx={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/asset/partnership_hero_banner.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: {xs: '320px', md:'550px' },
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    }}>
      <Box sx={{
          width: {md: '80%', xs: '100%'},
           height: '100%',
      }}>
       <Grid container sx={{ height: '100%' }}>
         <Grid item md={6} xs={12}>
           <Box sx={{
             height: '100%',
             display:'flex',
            alignItems:"center",
            justifyContent: 'center',
            flexDirection: 'column',
             
           }}>
            <Box color="white" sx={{margin:{xs: '32px 8px'}}}>
           <Typography variant={isXs ? 'h5' : 'h4'}>With Abeg Tow Me get ready to</Typography>
           <Typography variant={isXs ? 'h5' : 'h4'}>cash out week in week,</Typography>
           <Typography variant={isXs ? 'h5' : 'h4'} gutterBottom>out!</Typography>
           <Typography variant="body2" gutterBottom><strong>Register Now</strong> to become an Abeg Tow Me Driver and become your own boss</Typography>
             <Box>
               <a href="https://play.google.com/store/apps/details?id=com.abegtowme.driver">
               <Button>Sign up as a driver</Button>
               </a>
             </Box>
             </Box>
           </Box>
         </Grid>
         <Grid item md={6} xs={12} sx={{ height: '100%' }}>
           
         </Grid>
       </Grid>
       <Box  sx={{
                  position: 'absolute', 
                  top: {xs: '72%', md: '50%'} ,
                  left: {xs: '12%', md: '55%',},
                  width: {xs: '80%', md: '33%',},
                  }}
                  component="img"
                  src={`${process.env.PUBLIC_URL}/asset/partnership_mobileApp.png`}
                  alt="play store"
                  >
           </Box>
      </Box>
    </Box>

    {/* Second section */}
    <Box 
       sx={{
        // marginTop does not work here without collapsing the divs bellow
        // so I have to work around it
        margin:{xs: '212px 0px', md: "172px 0px"},
       }}
    
     >
        <Typography align="center" variant={isXs ? 'h4' : 'h3'} mb="32px">Why drive for Abeg Tow Me?</Typography>
        <Box sx={{
          display:'flex',
          alignItems:"center",
          justifyContent: 'center',
        }}>
         <Grid container sx={{
           width:{xs: '90%', md: '80%'},
         }}
         spacing={4}
         >
       
           {/* Section three */}
            <WhyDrive whyDriveData={whyDriveData }/>
         </Grid>
        </Box>
    </Box>

    {/* Section four */}
    <Box
    sx={{
          display:'flex',
          alignItems:"center",
          justifyContent: 'center',
          flexDirection: 'column',
    }}
    >
      <Typography align="center" variant={isXs ? 'h4' : 'h3'} gutterBottom>Frequently Asked Questions</Typography>      
      <Stack  
         sx={{ 
          width: {xs: '90%', md: '80%'},
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          }}
          spacing={2}
          >
            <FnQ />
      </Stack>
    </Box>

      <Box sx={{margin:{xs: '64px 0px', md: '128px 0px',
        display: 'flex',
        justifyContent: 'center',
    
    }}}>
        <DesktopSectionFour>
          <Box width="70%" bgcolor="#0d1321" borderRadius="4px"  padding="16px"> 
            <Grid container>
              <Grid item md={7} alignContent="center" >
                <Box color="white">
                  <Typography variant="h4">Become an Abeg Tow Me</Typography>
                  <Typography variant="h4">Driver and be your</Typography>
                  <Typography variant="h4">own Boss</Typography>
                  <Box mt="16px">
                    <a href="https://play.google.com/store/apps/details?id=com.abegtowme.driver">
                      <Button>Register NOW</Button>
                    </a>
                    </Box>
                </Box>
              </Grid>
              <Grid item md={5}>
                    <Box 
                    component="img"
                    src={`${process.env.PUBLIC_URL}/asset/partnership_person.png`}
                    alt="partnership image"
                    marginRight="16px"
                    sx={{cursor: "pointer"}}
                    width="100%"
                      >
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DesktopSectionFour>

        <MobileSectionFour>
        <Box  bgcolor="#0d1321" borderRadius="4px"  padding="16px"> 
            <Grid container spacing={4}>
              <Grid item xs={12} alignContent="center" >
                <Box color="white">
                  <Typography variant="h5">Become an Abeg Tow Me</Typography>
                  <Typography variant="h5">Driver and be your</Typography>
                  <Typography variant="h5">own Boss</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                    <Box 
                    component="img"
                    src={`${process.env.PUBLIC_URL}/asset/partnership_person.png`}
                    alt="partnership image"
                    marginRight="16px"
                    sx={{cursor: "pointer"}}
                    width="100%"
                      >
                </Box>
                  <Box mt="16px">
                    <a href="https://play.google.com/store/apps/details?id=com.abegtowme.driver">
                    <Button>
                        Register NOW
                    </Button>
                  </a> 
                  </Box>
              </Grid>
            </Grid>
          </Box>
        </MobileSectionFour>
      </Box>

    </> 

    
   
  )
}

export default Partnership


