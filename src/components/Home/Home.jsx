import React from 'react'
import { Box,  } from '@mui/material'
import Item1 from './Item_1'
import Item2 from './Item_2'
import Item3 from './Item_3'
import Item4 from './Item_4'
import Item5 from './Item_5'
import Item6 from './Item_6'
import { DownloadMobileApp } from '../ReusableComponent/DownloadMobileApp'
import Item8 from './Item_8'

const Home = () => {
  return (
    <Box sx={{
        display: 'flex', 
        flexDirection:"column", 
        justifyContent: 'center', 
        alignItems: "center"
        }}>
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <DownloadMobileApp />
      <Item8 />
    </Box>
  )
}

export default Home
