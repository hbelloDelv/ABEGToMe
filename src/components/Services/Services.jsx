import React from 'react'
import {Box, Grid, Typography, Stack, Button, useMediaQuery} from '@mui/material'
import { DownloadMobileApp } from '../ReusableComponent/DownloadMobileApp'
import { GridItem } from './GridItem'
import {useTheme} from '@mui/material/styles';


const ServicesDesktop = () => {
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
      <Typography variant="h4">Our Services</Typography>
    </Box>

    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box 
        sx={{
          width: {xs: '90vw', md: '70vw'},
          margin: '64px 0px'
        }}
      >
        <Typography variant="h5">
          At Abeg, we have a wide array of services, click on your service of interest to learn more.
        </Typography>

      </Box>
    </Box>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
    <Box
      sx={{
        width: {xs: '90vw', md: '70vw'},
      }}
    >
      <Grid container spacing={2}>
        <GridItem />
      </Grid>
    </Box>
    </Box>
      
      <Box sx={{
        margin: '64px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
        <Stack  width='70vw' direction="row" bgcolor='#0d1321'>
            <Box 
              component="img"
              src={`${process.env.PUBLIC_URL}/asset/service_image.jpg`}
              alt="play store"
              marginRight="16px"
              sx={{cursor: "pointer"}}
              width="50%"
                      >
              </Box>
            <Box
              sx={{
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'white',
                pl: '4px'
              }}
            >
                <Typography variant="h4">Needs spear parts for</Typography>
                <Typography variant="h4">your vehicle?</Typography>
                <Box mt="12px">
                    <Button>Send a request</Button>
                </Box>
            </Box>
        </Stack>
      </Box>

      <DownloadMobileApp />

</>
  )
}

const ServicesMobile = () => {
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
      <Typography variant="h5">Our Services </Typography>
    </Box>

    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box 
        sx={{
          width: {xs: '90vw', md: '70vw'},
          margin: '64px 0px'
        }}
      >
        <Typography variant="h5">
          At Abeg Tow Me, we have a wide array of services, click on your service of interest to learn more.
        </Typography>

      </Box>
    </Box>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
    <Box
      sx={{
        width: {xs: '90vw', md: '70vw'},
      }}
    >
      <Grid container spacing={2}>
        <GridItem />
      </Grid>
    </Box>
    </Box>
      
      <Box sx={{
        margin: '128px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
        <Stack  width='90vw' direction="column">
          <Box
              sx={{
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                pl: '4px',
                marginBottom: '16px',
              }}
            >
                <Typography variant="h5">Needs spear parts for</Typography>
                <Typography variant="h5">your vehicle?</Typography>
                <Box mt="12px">
                    <Button>Send a request</Button>
            </Box>
            </Box>
            <Box 
              component="img"
              src={`${process.env.PUBLIC_URL}/asset/service_image.jpg`}
              alt="play store"
              marginRight="16px"
              sx={{cursor: "pointer"}}
              width="100%"
                >
          </Box>
        </Stack>
      </Box>

      <DownloadMobileApp />

</>
  )
}




const Services = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    
<>
{!matches && <ServicesDesktop />}

{matches && <ServicesMobile /> }
</>
  )
}

export default Services

