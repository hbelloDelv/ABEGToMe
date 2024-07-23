import React from 'react'
import { Stack, Grid, Fab, Box, useMediaQuery, Typography, Divider} from '@mui/material';
import {useTheme} from '@mui/material/styles';



const DesktopLayout = ()=>{
  return(
    <Box
    sx={{ width: { md: '80%', xs: '100%' }, marginTop: '128px' }}
  > 
        <Divider component="div" role="presentation" textAlign="center" sx={{ width: "70%", margin: "0 auto",}}>
         <Typography variant="h4" sx={{ padding: "0px 64px" }}>Our Services</Typography>
        </Divider>
    <Stack direction="row" justifyContent="center" spacing={2} marginTop="32px" >
    <Fab variant="extended">Towing Service</Fab>
    <Fab variant="extended">Vehicle recovery</Fab>
    <Fab variant="extended">Winching and extraction</Fab>
    <Fab variant="extended">Speciality towing</Fab>
    </Stack>
    
    <Stack direction="row" justifyContent="center" spacing={2} marginTop="16px">
    <Fab variant="extended">24/7 Emergencey</Fab>
    <Fab variant="extended">Roadside assistance</Fab>
    <Fab variant="extended">Fuel delivery</Fab>
    </Stack>

</Box>
 
  )
}
const MobileLayout = ()=>{
  return(
    <Box width="100%" marginTop='64px' padding="0px 8px">
       <Divider component="div" role="presentation" textAlign="center" sx={{ width: "90%", margin: "0 auto",}}>
         <Typography variant="h4" >Our Services</Typography>
        </Divider>
      <Grid container spacing={2} padding="0px 8px"  marginTop="24px">
        <Grid item xs={6}>
          <Fab  sx={{width: "100%"}}  variant="extended">Towing Service</Fab>
        </Grid>
        <Grid item xs={6}>
          <Fab variant="extended" sx={{width: "100%"}}>Vehicle recovery</Fab>
        </Grid>
        <Grid item xs={6}>
          <Fab  sx={{width: "100%"}} variant="extended">Fuel delivery</Fab>
        </Grid>
        <Grid item xs={6}>
            <Fab   sx={{width: "100%"}} variant="extended">Speciality towing</Fab>
        </Grid>
        <Grid item xs={6}>
          <Fab   sx={{width: "100%"}} variant="extended">24/7 Emergencey</Fab>
        </Grid>
        <Grid item xs={6}>
          <Fab   sx={{width: "100%"}} variant="extended">Roadside assistance</Fab>
        </Grid>
          <Grid item xs={12} container justifyContent="center">
            <Fab sx={{ width: "60%" }} variant="extended">Winching and extraction</Fab>
          </Grid>
      </Grid>
    </Box>
  )
}

const Item3 = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    
<>
{!matches && <DesktopLayout />}

{matches && <MobileLayout /> }
</>
  )
}

export default Item3
