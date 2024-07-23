import {Grid, Box, Stack, Typography, useMediaQuery } from "@mui/material";
import {useTheme} from '@mui/material/styles';




const DesktopLayout = () => {
  return (
      <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '128px',
                marginBottom: '128px',
            }}
      
      >
      <Box sx={{ width: '80vw'}}>
        <Grid container>
            <Grid item xs={12} md={6} container 
                    sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}
                    >
                <Box >
                    <Typography variant="h4">Experience simplicity with</Typography>
                    <Typography variant="h4"> our mobile app</Typography>
                    <Box marginTop="16px" bgcolor="black" color="white" padding="4px"  sx={{width:{xs: '70%', md: "60%"}}} borderRadius="2px">
                        <Box><Typography variant="h6">Download Mobile App</Typography></Box>
                    </Box>
                    <Stack direction="row" marginTop='16px'>
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
            </Grid>
            <Grid item xs={12} md={6}>
                <Box bgcolor="black" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:{xs: '16px'}}} borderRadius="100px 100px 0 0;">
                <img src={`${process.env.PUBLIC_URL}/asset/item_7_image.png`} alt="section six"  width="60%"  height="90%" style={{borderRadius: '4px'}}/>
                </Box>
            </Grid>
        </Grid>
      </Box>
      </Box>
  )
}



const MobileLayout = () =>{
    return(
        <Box 
        sx={{
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '128px',
            marginBottom: '64px',
        }}
  
  >
        <Box width="90%" bgcolor="black" borderRadius="4px 4px 0 0;">
            <Box padding='8px'  color="white">
                <Typography variant="h5">Experience simplicity with</Typography>
                <Typography variant="h5"> our mobile app</Typography>
            </Box>
            <Box>
                <Stack direction="row" marginTop='16px' padding='8px'>
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
            <Box sx={{display: 'flex', justifyContent: 'center'}} marginTop="16px">
                <img src={`${process.env.PUBLIC_URL}/asset/item_7_image.png`} alt="section six"  width="60%"  height="90%" style={{borderRadius: '4px'}}/>
            </Box>
        </Box>
    </Box>
    )
}



export const DownloadMobileApp = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
      
  <>
  {!matches && <DesktopLayout />}
  
  {matches && <MobileLayout /> }
  </>
    )
  }

// export default Item7
