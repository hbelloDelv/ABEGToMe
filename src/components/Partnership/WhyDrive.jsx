import React from 'react'
import { 
    Typography,
    Box,
    Grid,
} from "@mui/material";

const WhyDrive = ({whyDriveData }) => {
  return (
      <>
      {whyDriveData.map(item =>(
        <Grid item key={item.id} xs={12} md={6}>
    <Box>
      <Box sx={{
          display:'flex',
      }}>
          <Box mr="16px">{item.icon ? <item.icon size={30} /> : <div>No Icon</div>}</Box>
          <Box><Typography variant="h5">{item.title}</Typography></Box>
      </Box>
      <Box
        sx={{
            display:'flex'}}
      >
      <Box mr="48px"></Box>
      <Box><Typography variant="body1">{item.detail}</Typography></Box>

      </Box>
    </Box>
    </Grid>

      ))}
      </>
  )
  
}

export default WhyDrive
