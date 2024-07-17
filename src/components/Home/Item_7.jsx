import React from 'react'
import {Grid, Box, Stack, Typography } from "@mui/material";




const Item7 = () => {
  return (
      <Box sx={{ width: { md: '80%', xs: '90%'}, marginTop: '128px' }} >
        <Grid container>
            <Grid item xs={12} md={6} spacing={2}>
                <Box>
                    <Typography variant="h4">Experience simplicity with</Typography>
                    <Typography variant="h4"> our mobile app</Typography>
                    <Box marginTop="16px" bgcolor="black" color="white" padding="4px"  sx={{width:{xs: '70%', md: "40%"}}} borderRadius="2px">
                        <Box><Typography variant="h6">Download Mobile App</Typography></Box>
                    </Box>
                    <Stack direction="row" marginTop='16px'>
                            <Box 
                                component="img"
                                src={`${process.env.PUBLIC_URL}/asset/playStore_image.png`}
                                alt="play store"
                                marginRight="16px"
                                sx={{cursor: "pointer"}}
                                >
                            </Box>
                            <Box 
                                component="img"
                                src={`${process.env.PUBLIC_URL}/asset/appStore_image.png`}
                                alt="app store"
                                sx={{cursor: "pointer"}}
                            >
                            </Box>
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
  )
}

export default Item7
