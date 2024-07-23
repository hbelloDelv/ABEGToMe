import React from 'react'
import {Box, Grid, Typography} from '@mui/material'
import { DownloadMobileApp } from '../ReusableComponent/DownloadMobileApp'


const Blog = () => {
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
      <Typography variant="h4">Blog</Typography>
    </Box>
      <DownloadMobileApp />
</>
  )
}


export default Blog
