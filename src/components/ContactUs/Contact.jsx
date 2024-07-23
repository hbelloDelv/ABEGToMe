import React from 'react'
import { DownloadMobileApp } from '../ReusableComponent/DownloadMobileApp'
import {Box, Grid, Typography} from '@mui/material'


const Contact = () => {
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
      <Typography variant="h4">Contact</Typography>
    </Box>
    <DownloadMobileApp />
</>
  )
}

export default Contact
