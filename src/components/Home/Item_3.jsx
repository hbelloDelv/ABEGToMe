import React from 'react'
import { Stack, Grid, Fab, Box, useMediaQuery, Typography, Divider} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import { serviceData } from '../Services/serviceData';
import { Link} from 'react-router-dom';


const DesktopLayout = ()=>{
  
  const firstStackData = serviceData.slice(0, 4); // Adjust the indices as needed
  const secondStackData = serviceData.slice(4); // Adjust the indices as needed
  
  return(
 <Box
    sx={{ width: { md: '80%', xs: '100%' }, marginTop: '128px' }}
  > 
        <Divider component="div" role="presentation" textAlign="center" sx={{ width: "70%", margin: "0 auto",}}>
         <Typography variant="h4" sx={{ padding: "0px 64px" }}>Our Services</Typography>
        </Divider>
    <Stack direction="row" justifyContent="center" spacing={2} marginTop="32px" >
        {firstStackData.map(item =>(
              <Link to={`/services/${item.id}`} className="nav-item">    
                <Fab variant="extended">{item.title}</Fab>
            </Link>
        ))}
    </Stack>
    
    <Stack direction="row" justifyContent="center" spacing={2} marginTop="16px">
        {secondStackData.map(item =>(
            <Link to={`/services/${item.id}`} className="nav-item">    
              <Fab variant="extended" >{item.title}</Fab>
          </Link>
          ))}
    </Stack>
</Box>
 )}




const MobileLayout = ()=>{  
  // map to mobile layout
  const firstStackDataMobile = serviceData.slice(0, 7); // Adjust the indices as needed

  return(
    <Box width="100%" marginTop='64px' padding="0px 8px">
       <Divider component="div" role="presentation" textAlign="center" sx={{ width: "90%", margin: "0 auto",}}>
         <Typography variant="h4" >Our Services</Typography>
        </Divider>
      <Grid container spacing={2} padding="0px 8px"  marginTop="24px">
        {
          firstStackDataMobile.map((item, index) =>(
            <Grid item xs={index === firstStackDataMobile.length - 1 ? 12 : 6} key={item.id}>
            <Link to={`/services/${item.id}`} className="nav-item">
              <Fab sx={{ width: "100%" }} variant="extended">{item.title}</Fab>
            </Link>
            </Grid>
          ))
        }
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
