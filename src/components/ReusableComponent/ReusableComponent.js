import React from 'react'
import {Box, Typography} from '@mui/material'

export const TopBanner = () => {
  return (
    <Box sx={{
        minHeight: '20vh',
        bgcolor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        borderTopColor: 'white',
        marginTop: '4px'
      }}>
          <Typography>come see</Typography>
      </Box>
  )
}


