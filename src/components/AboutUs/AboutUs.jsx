import React from 'react'
import { DownloadMobileApp } from '../ReusableComponent/DownloadMobileApp'
import {Box, Grid, Typography, Stack,  useMediaQuery,} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import WhyDrive from '../Partnership/WhyDrive';
import { whyDriveData} from '../Partnership/WhyDriveData'
import FnQ from '../Partnership/FnQ';


const About = () => {
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
      <Typography variant="h4">About Us</Typography>
    </Box>

{/* our story component */}
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: '64px'
    }}> 
    <Box sx={{
      width:{xs: '90%', md: '80%'} ,
      // backgroundColor: 'red',
    }}>
      <Grid container>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Typography variant="body1" align="justify">
          ABEG Tow Me was born out of a shared vision among a group of 
          automotive enthusiasts who recognized the need for a modern, 
          tech-savvy solution to address the common challenges faced 
          by motorists on the road. Our founders came together with 
          decades of experience in the towing and automotive industry, 
          and a burning desire to revolutionize the way towing and roadside 
          assistance services are delivered. With a commitment to quality, 
          transparency, and customer satisfaction, ABEG Tow Me was established 
          to redefine the industry standard. We understand that life on the 
          road can be unpredictable, and that's why we're here to ensure you 
          have a reliable ally to turn to whenever you need assistance.         
           </Typography>
        </Grid>
        <Grid item xs={12} md={6} display="flex" alignItems="center"  order={{ xs: 1, md: 2 }}>
          {isXs ? <Typography variant="h5"  gutterBottom>
            OUR  STORY
          </Typography> : <Typography variant="h3" ml="64px" display="flex" alignItems="center">
            OUR  <br/> STORY
          </Typography> }
        </Grid>
      </Grid>
    </Box>
    </Box>

{/* our mission component */}
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: '64px'
    }}> 
    <Box sx={{
      width:{xs: '90%', md: '80%'} ,
    }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          {isXs ? <Typography variant="h5" gutterBottom>
            OUR  MISSION
          </Typography> : <Typography variant="h3" ml="64px" display="flex" alignItems="center">
            OUR  <br/> MISSION
          </Typography> }
        </Grid>
        <Grid item xs={12} md={6} >
          <Typography  variant="body1" >
          To provide fast, efficient, and affordable 
          roadside assistance, at your fingertips.
          </Typography>
        </Grid>
      </Grid>
    </Box>
    </Box>


    {/*why choose us component  */}
    <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: '64px',
            bgcolor: 'black',
            color: 'white',
            padding: '32px 0px',
            mt:{xs: '64px', md: '128px'}
    }}>
      <Box sx={{
      width:{xs: '90%', md: '80%'} ,
    }}>
        <Typography align="center" variant={isXs ? 'h4' : 'h3'} mb="32px">Why Choose Us?</Typography>
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
    </Box>

    {/* Section four */}
    <Box
    sx={{
          display:'flex',
          alignItems:"center",
          justifyContent: 'center',
          flexDirection: 'column',
          mt: {xs: '64px', md:'128px'}
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

    <DownloadMobileApp />
</>
  )
}


export default About

