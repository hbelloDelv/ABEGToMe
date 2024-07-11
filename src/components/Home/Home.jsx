import React from 'react'
import { Box,  } from '@mui/material'
import Item_1 from './Item_1'
import Item_2 from './Item_2'

const Home = () => {
  return (
    <Box sx={{display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: "center"}}>
      <Item_1 />
      <Item_2 />
    </Box>
  )
}

export default Home
