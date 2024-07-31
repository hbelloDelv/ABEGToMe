import React from 'react'
import {Box, Typography} from '@mui/material'



const Gallary = () => {
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
      <Typography variant="h4">Gallery</Typography>
    </Box>

</>
  )
}


export default Gallary

