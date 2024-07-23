import React from 'react'
import { Grid, Box, Stack, Typography} from "@mui/material";

const Partnership = () => {
  return (
    <Box 
    sx={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/asset/partnership_hero_banner.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '550px',
      mb: '128px',
      position: 'relative'
    }}>
      <Box sx={{
          //  bgcolor: "red",
           height: '100%'
      }}>
       <Grid container sx={{ height: '100%' }}>
         <Grid item md={6} xs={12}>
           <Box sx={{
             bgcolor: "green",
             height: '100%',
             display:'flex',
                        alignItems:"center",
                        justifyContent: 'center',
                        flexDirection: 'column',
             
           }}>
             <Box>
           <Typography variant="h4">With Abeg Tow Me get ready to</Typography>
           <Typography variant="h4">cash out week in week,</Typography>
           <Typography variant="h4">out</Typography>
             </Box>
           </Box>
         </Grid>
         <Grid item md={6} xs={12} sx={{ height: '100%' }}>
           no content
         </Grid>
       </Grid>
       <Box  sx={{
                  position: 'absolute', 
                  top: '50%',
                  left: {xs: '50%', md: '55%',},
                  // bgcolor: 'yellow'
                  }}
                  component="img"
                  src={`${process.env.PUBLIC_URL}/asset/partnership_mobileApp.png`}
                  alt="play store"
                  width="33%"
                  >
            
           </Box>
      </Box>
    </Box> 
   
  )
}

export default Partnership


